import { FC } from "react";
import { Container, SearchInput } from "./styles";
import { BiSearch } from 'react-icons/bi';

export interface SearchBarProps{
    onChange: (value: string) => void
}

const SearchBar: FC<SearchBarProps> = ({onChange}) => {
    return(
        <Container>
            <BiSearch size={16}/>
            <SearchInput onChange={(e) => onChange(e.target.value)} placeholder={"Buscar"} />
        </Container>

    );
}

export default SearchBar;