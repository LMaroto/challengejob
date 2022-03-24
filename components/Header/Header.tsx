import { Container } from "./styles";
import { BiPlus } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <Container>
        <h1>Empreendimentos</h1>
        <button>
          <span>Adicionar</span> <BiPlus size={16} />
        </button>
      </Container>
    </>
  );
}
