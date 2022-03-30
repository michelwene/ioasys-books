import { Container, ImgBook, QuotesLeft } from "./style";

export function Book() {
  return (
    <>
      <Container>
        <ImgBook>
          <img src="/Book.png" alt="Book" />
        </ImgBook>
        <div>
          <h1>Change By Design Second line exampl...</h1>
          <h2>Tim Brown, Julie Zhuo, Fried Maximiilian</h2>
          <div>
            <h3>Informações</h3>
            <ul>
              <li>
                Páginas <div>304 páginas</div>
              </li>
              <li>
                Editora <div>Editora Loyola</div>
              </li>
              <li>
                Publicação <div>2020</div>
              </li>
              <li>
                Idioma <div>Inglês</div>
              </li>
              <li>
                Título Original <div>Change By design</div>
              </li>
              <li>
                ISBN-10 <div>0062856626</div>
              </li>
              <li>
                ISBN-30 <div>978-0062856623</div>
              </li>
            </ul>
          </div>
          <article>
            <h4>Resenha da Editora</h4>
            <p>
              <QuotesLeft />
              The subject of “design thinking” is the rage at business schools,
              throughout corporations, and increasingly in the popular press—due
              in large part to the work of IDEO, a leading design firm, and its
              celebrated CEO, Tim Brown, who uses this book to show how the
              techniques and strategies of design belong at every level of
              business.
            </p>
          </article>
        </div>
      </Container>
    </>
  );
}
