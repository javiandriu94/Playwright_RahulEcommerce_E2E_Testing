import LoginPage from "../pages/LoginPage";
import { Page } from "@playwright/test"


class POManager  {

    private page: Page;
    private loginPage: LoginPage;
    

    constructor (page:Page){
        this.page= page;
        this.loginPage = new LoginPage(this.page)
    }

    getLoginPage () {
        return this.loginPage;
    }

    
}
export default POManager ;