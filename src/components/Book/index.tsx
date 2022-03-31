import { Ibook } from "types/livros";
import { Container, ImgBook, QuotesLeft } from "./style";

interface IBookProps {
  item: Ibook;
}

export function Book({ item }: IBookProps) {
  return (
    <>
      <Container>
        {item && (
          <>
            <ImgBook>
              <img src={item.imageUrl} alt={item.title} />
            </ImgBook>
            <div>
              <h1>{item.title}</h1>
              <h2>{item.authors}</h2>
              <div>
                <h3>Informações</h3>
                <ul>
                  <li>
                    Páginas <div>{item.pageCount} páginas</div>
                  </li>
                  <li>
                    Editora <div>{item.publisher}</div>
                  </li>
                  <li>
                    Publicação <div>{item.published}</div>
                  </li>
                  <li>
                    Idioma <div>{item.language}</div>
                  </li>
                  <li>
                    Título Original <div>Change By design</div>
                  </li>
                  <li>
                    ISBN-10 <div>{item.isbn10}</div>
                  </li>
                  <li>
                    ISBN-30 <div>{item.isbn13}</div>
                  </li>
                </ul>
              </div>
              <article>
                <h4>Resenha da Editora</h4>
                <p>
                  <QuotesLeft />
                  {item.description}
                </p>
              </article>
            </div>
          </>
        )}
      </Container>
    </>
  );
}
