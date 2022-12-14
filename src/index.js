import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ScrollContext} from 'react-router-scroll-4';
import {IntlProvider} from 'react-redux-multilingual'
import './index.scss';
import 'animate.css/animate.min.css';

// Import custom components
import store from './store';
import translations from './constants/translations'

// Layouts

import Home1 from './components/home-1';

import PageNotFound from './components/404';

// Features
import Layout from './app'
import AboutPage from "./components/pages/about/about";
import ContactPage from "./components/pages/contact/contact";
import BlogPage from "./components/pages/blog/blog";
import SingBlogPage from "./components/pages/blog/single-blog";
import FAQPage from "./components/pages/faq/faq";
import TypographyPage from "./components/pages/typography/typography";
import OurTeamPage from "./components/pages/our-team/our-team";
import thankuPage from './thankuPage';
import {getAllData} from "./actions";
import MenuProvider from 'react-flexible-sliding-menu';

class Root extends React.Component {

    render() {
        store.dispatch(getAllData());
        return (
            <MenuProvider MenuComponent={ContactPage}>
            <Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
                    <BrowserRouter basename={'/'}>
                        <ScrollContext>
                            <Switch>
                                <Layout>
                                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home1}/>
                                    <Route exact path={`${process.env.PUBLIC_URL}/thankuPage`} component={thankuPage}/>
                                </Layout>
                            </Switch>
                        </ScrollContext>
                    </BrowserRouter>
                </IntlProvider>
            </Provider>
</MenuProvider>
        );
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));


