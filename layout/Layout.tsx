import Main from "./Main"
import Header from "./Header"
import Footer from "./Footer"
import Wrapper  from "./Wrapper"

const Layout = ({children, homeDoc}) => (
    <Wrapper>
        <Header
            homeDoc={homeDoc}
        />
        <Main homeDoc={homeDoc}>
            {children}
        </Main>
        <Footer />
    </Wrapper>
)

export default Layout