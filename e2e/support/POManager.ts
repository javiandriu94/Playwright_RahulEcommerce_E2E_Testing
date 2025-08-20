import EcommercePage from "../pages/EcommercePage";
import LoginPage from "../pages/LoginPage";
import { Page } from "@playwright/test"


class POManager  {

    private page: Page;
    private loginPage: LoginPage;
    private ecommercePage: EcommercePage;
    
    constructor (page:Page){
        this.page= page;
        this.loginPage = new LoginPage(this.page)
        this.ecommercePage = new EcommercePage(this.page)
    }

    getLoginPage () {
        return this.loginPage;
    }

    getEcommercePage () {
        return this.ecommercePage;
    }

    
}
export default POManager ;