import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Container, EnterpriseContainer } from "./styles";

import { BiPencil, BiTrashAlt } from "react-icons/bi";

export default function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <SearchBar/>
        <EnterpriseContainer>
          <section>
            <div>
              <h1>Villega Vila Velha</h1>
              <button
                onClick={() => {
                  alert("tummm");
                }}
              >
                <BiPencil size={20} title={"Editar empreendimento"} />
              </button>
              <button
                onClick={() => {
                  alert("testando som");
                }}
              >
                <BiTrashAlt size={20} title={"Excluir empreendimento"} />
              </button>
            </div>
            <p>Rua Dório Silva, 100 - Vila Guaranhus, Vila Velha</p>
          </section>
          <aside>
            <span>Lançamento</span>
            <span>Residencial</span>
          </aside>
        </EnterpriseContainer>

        <EnterpriseContainer>
          <section>
            <div>
              <h1>Villega Vila Velha</h1>
              <button
                onClick={() => {
                  alert("tummm");
                }}
              >
                <BiPencil size={20} title={"Editar empreendimento"} />
              </button>
              <button
                onClick={() => {
                  alert("testando som");
                }}
              >
                <BiTrashAlt size={20} title={"Excluir empreendimento"} />
              </button>
            </div>
            <p>Rua Dório Silva, 100 - Vila Guaranhus, Vila Velha</p>
          </section>
          <aside>
            <span>Lançamento</span>
            <span>Residencial</span>
          </aside>
        </EnterpriseContainer>
        <EnterpriseContainer>
          <section>
            <div>
              <h1>Villega Vila Velha</h1>
              <button
                onClick={() => {
                  alert("tummm");
                }}
              >
                <BiPencil size={20} title={"Editar empreendimento"} />
              </button>
              <button
                onClick={() => {
                  alert("testando som");
                }}
              >
                <BiTrashAlt size={20} title={"Excluir empreendimento"} />
              </button>
            </div>
            <p>Rua Dório Silva, 100 - Vila Guaranhus, Vila Velha</p>
          </section>
          <aside>
            <span>Lançamento</span>
            <span>Residencial</span>
          </aside>
        </EnterpriseContainer>
        <EnterpriseContainer>
          <section>
            <div>
              <h1>Villega Vila Velha</h1>
              <button
                onClick={() => {
                  alert("tummm");
                }}
              >
                <BiPencil size={20} title={"Editar empreendimento"} />
              </button>
              <button
                onClick={() => {
                  alert("testando som");
                }}
              >
                <BiTrashAlt size={20} title={"Excluir empreendimento"} />
              </button>
            </div>
            <p>Rua Dório Silva, 100 - Vila Guaranhus, Vila Velha</p>
          </section>
          <aside>
            <span>Lançamento</span>
            <span>Residencial</span>
          </aside>
        </EnterpriseContainer>
      </Container>
    </>
  );
}
