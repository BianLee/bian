import React, { useState } from "react";
import { LoginElement } from "../components/index";
// import "../styles/loginElement.css"
import "../loginElement.css";
export function LoginElementContainer(props) {
    const {
        email,
        setEmail,
        password,
        setPassword,
        username,
        setUsername,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;

    return (
        <>
            <LoginElement.Label>Email</LoginElement.Label>
            <input
                className="acc-input"
                type="text"
                autoFocus
                required
                value={email}
                style={{ outline: "none" }}
                onChange={(e) => setEmail(e.target.value)}
            />

            <LoginElement.Label>Password</LoginElement.Label>
            <input
                className="acc-input"
                type="password"
                required
                value={password}
                style={{ outline: "none" }}
                onChange={(e) => setPassword(e.target.value)}
            />

            {!hasAccount ? (
                <></>
            ) : (
                <>
                    <LoginElement.Label>Name</LoginElement.Label>
                    <input
                        className="acc-input"
                        type="text"
                        autoFocus
                        required
                        value={username}
                        style={{ outline: "none" }}
                        onChange={(e) => setUsername(e.target.value)}
                    />{" "}
                </>
            )}

            <LoginElement.ButtonContainer width="80%">
                <div className="btnContainer">
                    {!hasAccount ? (
                        <>
                            <button
                                className="authButton"
                                onClick={handleLogin}
                            >
                                Sign In
                            </button>
                            <div></div>
                            <br></br>
                            <p className="errorMsg">{emailError}</p>
                            <div></div>
                            <p className="errorMsg">{passwordError}</p>
                            <div></div>
                            <p className="signP">
                                <span
                                    className="signSpan"
                                    onClick={() => {
                                        setHasAccount(!hasAccount);
                                    }}
                                >
                                    Sign up
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button
                                className="authButton"
                                onClick={handleSignup}
                            >
                                Sign Up
                            </button>
                            <div></div>
                            <br></br>
                            <p className="errorMsg">{passwordError}</p>
                            <div></div>
                            <p className="errorMsg">{emailError}</p>
                            <div></div>
                            <p className="signP">
                                <span
                                    className="signSpan"
                                    onClick={() => {
                                        setHasAccount(!hasAccount);
                                    }}
                                >
                                    Sign In
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </LoginElement.ButtonContainer>
        </>
    );
}
