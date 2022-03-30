import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { Container, Header, Section } from "./style";
import { useState } from "react";
import { Modal } from "components/Modal";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  const livros = [
    {
      id: 1,
      titulo: "Livro 1",
      autor: "Autor 1",
      editora: "Editora 1",
      númeroPaginas: 100,
      ano: 2002,
    },
    {
      id: 2,
      titulo: "Livro 2",
      autor: "Autor 2",
      editora: "Editora 2",
      númeroPaginas: 100,
      ano: 2016,
    },
    {
      id: 3,
      titulo: "Livro 3",
      autor: "Autor 3",
      editora: "Editora 3",
      númeroPaginas: 100,
      ano: 2015,
    },
    {
      id: 4,
      titulo: "Livro 4",
      autor: "Autor 4",
      editora: "Editora 4",
      númeroPaginas: 100,
      ano: 2022,
    },
  ];

  const toggleModal = (id) => {
    if (!showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    setShowModal(!showModal);
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
            Bem vindo, <strong>Michel Wene</strong>!
          </p>
          <button aria-label="Exit Books" />
        </div>
      </Header>
      <Container>
        <AnimateSharedLayout>
          <Section>
            {livros.map((item) => (
              <motion.div
                key={item.id}
                onClick={() => toggleModal(item.id)}
                layoutId={String(item.id)}
              >
                <img src="/Book1.svg" alt="Crossing the Chasm" />
                <div>
                  <h2>{item.titulo}</h2>
                  <h3>{item.autor}</h3>
                  <p>
                    {item.númeroPaginas} páginas <br /> {item.editora} <br />
                    Publicado em {item.ano}
                  </p>
                </div>
              </motion.div>
            ))}
          </Section>
          <Modal
            showModal={showModal}
            toggleModal={toggleModal}
          />
        </AnimateSharedLayout>
      </Container>
    </>
  );
}
