import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Container, Header, Section } from "styles/livros";
import { useEffect, useState } from "react";
import { Modal } from "components/Modal";
import Link from "next/link";
import { handleRecoverUserDataFromCookies } from "utils/recoverUserDataFromCookie";

import { api } from "services/client/api";
import { Ibook, IBooksData } from "types/livros";


export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState<Ibook[]>([]);
  const [pages, setPages] = useState(1);
  const [selectedBook, setSelectedBook] = useState<Ibook>();
  const userData = handleRecoverUserDataFromCookies();

  useEffect(() => {
    async function loadBooks() {
      try {
        const { data } = await api.get<IBooksData>("/books", {
          params: { page: 1, amount: 12 },
        });
        console.log(data);

        setBooks(data.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadBooks();
  }, []);

  const handleOpenModal = (book: Ibook) => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
    setSelectedBook(book);
  };

  const onRequestClose = () => {
    setShowModal(false);
    setSelectedBook(undefined);
  };

  return (
    <>
      <Head>
        <title>Livros | Oasys Books</title>
      </Head>
      <Header>
        <div>
          <img src="/logo_black.svg" alt="Oasys" />
          <p>Books</p>
        </div>
        <div>
          <p>
            Bem vindo, <strong>{userData?.name}</strong>!
          </p>
          <Link href="/">
            <button aria-label="Exit Books" />
          </Link>
        </div>
      </Header>
      <Container>
        <AnimateSharedLayout>
          <Section>
            {books?.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => handleOpenModal(item)}
                layoutId={item.id}
              >
                <img src={item.imageUrl} alt={item.title} />
                <div>
                  <h2>{item.title}</h2>
                  <h3>{item.authors}</h3>
                  <p>
                    {item.pageCount} páginas <br /> {item.publisher} <br />
                    Publicado em {item.published}
                  </p>
                </div>
              </motion.div>
            ))}
          </Section>
          <Modal showModal={showModal} toggleModal={onRequestClose} selectedItem={selectedBook}/>
        </AnimateSharedLayout>

        {/* <button type="button" onClick={() => handleTest()}>
          {" "}
          asdfadsfas
        </button> */}
      </Container>
    </>
  );
}
