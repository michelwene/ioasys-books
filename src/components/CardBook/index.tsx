/* eslint-disable @next/next/no-img-element */
import { Ibook } from 'types/livros';

import { Container } from './style';

interface ICardBookProps {
  item: Ibook;
  onClick: () => void;
}

export function CardBook({ item, onClick }: ICardBookProps) {
  return (
    <>
      <Container onClick={onClick} layoutId={item.id}>
        <img className="img" src={item.imageUrl} alt={item.title} />
        <div>
          <h2>{item.title}</h2>
          <h3>{item.authors}</h3>
          <p>
            {item.pageCount} páginas <br /> {item.publisher} <br />
            Publicado em {item.published}
          </p>
        </div>
      </Container>
    </>
  );
}
