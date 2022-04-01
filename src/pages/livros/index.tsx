import { useEffect, useState } from 'react';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';

import { CardBook } from 'components/CardBook';
import { CardBookSkeleton } from 'components/CardBook/skeleton';
import { Modal } from 'components/Modal';
import { AnimateSharedLayout } from 'framer-motion';
import { useIsFirstRender } from 'hooks/useFirstRender';
import { api, removeAuthentication, setupAPI } from 'services/client/api';
import {
  ArrowLeft,
  ArrowRight,
  Container,
  Header,
  ItemsGrid,
  Pagination,
  Section
} from 'styles/livros';
import { Ibook, IBooksData } from 'types/livros';
import { handleDestroyCookies } from 'utils/destroyCookie';
import { handleRecoverUserDataFromCookies } from 'utils/recoverUserDataFromCookie';

interface IProps {
  books: Ibook[];
  totalPages: number;
}

export default function BooksPage({
  books: initialData,
  totalPages: initialTotalPages
}: IProps) {
  const [books, setBooks] = useState<Ibook[]>(initialData);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [selectedBook, setSelectedBook] = useState<Ibook>();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const userData = handleRecoverUserDataFromCookies();
  const isFirst = useIsFirstRender();

  async function loadBooks() {
    try {
      setLoading(true);
      const { data } = await api.get<IBooksData>('/books', {
        params: { page: page, amount: 12 }
      });

      setBooks(data.data);
      setTotalPages(Math.ceil(data.totalPages));
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isFirst) {
      loadBooks();
    }
  }, [page]);

  const handleOpenModal = (book: Ibook) => {
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    setShowModal(!showModal);
    setSelectedBook(book);
  };

  const onRequestClose = () => {
    setShowModal(false);
    setSelectedBook(undefined);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  async function handleSignOut() {
    try {
      await handleDestroyCookies('userData');
      await handleDestroyCookies('accessToken');
      await handleDestroyCookies('refreshToken');

      removeAuthentication();

      router.push('/');
    } catch (err) {
      alert('erro');
    }
  }

  return (
    <>
      <Head>
        <title>Livros | Oasys Books</title>
      </Head>
      <Container>
        <Header>
          <div>
            <Image width={105} height={36} src="/Logo_black.svg" alt="Oasys" />
            <p>Books</p>
          </div>
          <div>
            <p>
              Bem vindo, <strong>{userData?.name}</strong>!
            </p>
            <button
              type="button"
              aria-label="Exit Books"
              onClick={() => handleSignOut()}
            />
          </div>
        </Header>
        <AnimateSharedLayout>
          <Section>
            <ItemsGrid>
              {loading
                ? Array(12)
                    .fill(0)
                    .map((_, index) => <CardBookSkeleton key={index} />)
                : books?.map((item) => (
                    <CardBook
                      onClick={() => handleOpenModal(item)}
                      item={item}
                      key={item.id}
                    />
                  ))}
            </ItemsGrid>

            <Pagination>
              <p>
                Página <strong>{page}</strong> de <strong>{totalPages}</strong>
              </p>
              <button onClick={handlePreviousPage} disabled={page === 1}>
                <ArrowLeft />
              </button>
              <button
                className="next"
                disabled={page === totalPages}
                onClick={handleNextPage}
              >
                <ArrowRight />
              </button>
            </Pagination>
          </Section>

          <Modal
            showModal={showModal}
            toggleModal={onRequestClose}
            selectedItem={selectedBook}
          />
        </AnimateSharedLayout>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const apiServer = setupAPI(context);

  const { data } = await apiServer.get<IBooksData>('/books', {
    params: { page: 1, amount: 12 }
  });

  return {
    props: {
      books: data.data,
      totalPages: Math.ceil(data.totalPages)
    }
  };
};
