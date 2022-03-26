import { Container, AddButton } from "./styles";
import { BiPlus } from "react-icons/bi";

import RegisterModal from "../RegisterModal";
import { useCallback, useState, FC } from "react";

export interface HeaderProps {
  onReloadEnterprises: () => void
}

const Header: FC<HeaderProps> = ({onReloadEnterprises}) =>  {
  
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleModal = useCallback(
    () => setIsModalOpen(isModalOpen => !isModalOpen),
    [setIsModalOpen]
  );

  return (
    <>
      <Container>
        <h1>Empreendimentos</h1>
        <AddButton onClick={toggleModal}>
          <span>Adicionar</span> <BiPlus size={16} />
        </AddButton>
        <RegisterModal onReloadEnterprises={onReloadEnterprises} isOpen={isModalOpen} onClose={toggleModal}/>
      </Container>
    </>
  );
}

export default Header