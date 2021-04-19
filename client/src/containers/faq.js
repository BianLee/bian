import React from "react";
import "../styles/styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "../images/logo.png";
export default class FAQComponent extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <>
                <div>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Bian</title>
                    <link rel="alternate icon" href="/favicon.ico" />
                    <link rel="stylesheet" href="styles.css" />
                    <section className="dod-layout-default">
                        <header
                            data-grid-area="header"
                            className="dod-space-between-responsive"
                        >
                            <div>
                                <h1
                                    className="dod-heading-1 dod-stack-4 logo"
                                    style={{ justifyContent: "trie" }}
                                >
                                    <Link to="/">
                                        <div className="sponsor">
                                            <img id="logo" src={logo}></img>
                                        </div>
                                    </Link>
                                </h1>
                            </div>
                            <p></p>
                            {/* <Link to="/blog" style={{ marginLeft: "10px" }}>
                                Blog
                            </Link> */}
                            <a
                                href="https://discord.gg/zPyjsCJ5Sn"
                                target="_blank"
                            >
                                Discord
                            </a>
                            <a
                                href="https://github.com/BianLee/opensourcecollage.com"
                                target="_blank"
                                style={{ marginLeft: "10px" }}
                            >
                                Contribute
                            </a>
                            {/*
                            <Link
                                to="/management"
                                style={{ marginLeft: "10px" }}
                            >
                                Management
                            </Link>
                             */}
                            {/* <Link to="/faq" style={{ marginLeft: "10px" }}>
                                FAQ
                            </Link> */}
                            <Link to="/post" style={{ marginLeft: "10px" }}>
                                Post
                            </Link>
                        </header>
                        <main data-grid-area="main">
                            <p>This page is currently under construction.</p>
                        </main>
                        <footer data-grid-area="footer"></footer>
                    </section>
                </div>
            </>
        );
    }
}
