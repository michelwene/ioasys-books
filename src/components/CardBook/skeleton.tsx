import { Container } from "./style";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function CardBookSkeleton(){
return(
    <>
    <Container>
    <Skeleton className="img" height={122} width={81} />
    <div>
        <Skeleton height={21} width={100} />
        <Skeleton height={20} width={100} />
        <Skeleton height={10} width={100} count={3}/>
    </div>
    </Container>
    </>
)
}