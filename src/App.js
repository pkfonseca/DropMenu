import { Component } from "react";
import { Container, BoxDropMenu, SubBoxDropMenu, ActionDropMenu, BoxConteudoDropMenu, SubBoxConteudoDropMenu, ConteudoDropMenu } from './style.js'

export default class App extends Component {
state={
  abrirMenu: false
}
  render() {
    return (
      <Container>
        <BoxDropMenu>
          <SubBoxDropMenu>

            <ActionDropMenu
             
            >
              Clique aqui
            </ActionDropMenu>

            <BoxConteudoDropMenu>

              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 1
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>
              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 2
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>
              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 3
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>

            </BoxConteudoDropMenu>

          </SubBoxDropMenu>


          <SubBoxDropMenu>

            <ActionDropMenu>Clique aqui</ActionDropMenu>

            <BoxConteudoDropMenu>

              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 1
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>
              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 2
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>
              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 3
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>

            </BoxConteudoDropMenu>

          </SubBoxDropMenu>


          <SubBoxDropMenu>

            <ActionDropMenu>Clique aqui</ActionDropMenu>

            <BoxConteudoDropMenu>

              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 1
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>
              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 2
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>
              <SubBoxConteudoDropMenu>
                <ConteudoDropMenu>
                  LINK 3
                </ConteudoDropMenu>
              </SubBoxConteudoDropMenu>

            </BoxConteudoDropMenu>

          </SubBoxDropMenu>
        </BoxDropMenu>
      </Container>

    )
  }
};
