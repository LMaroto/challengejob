import { Container, SearchInput } from "./styles";
import { BiSearch } from 'react-icons/bi';

export default function SearchBar () {
    return(
        <Container>
            <BiSearch size={16}/>
            <SearchInput placeholder={"Buscar"} />
        </Container>

    );
}