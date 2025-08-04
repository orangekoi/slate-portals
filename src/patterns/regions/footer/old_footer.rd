footer {
    background-color: hsl(var(--footer-background));
    position: relative;

    position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    gap: var(--space-32);
    /* padding: 4em var(--space-16); */
    margin: 0 auto;
    width: 100%;
    padding: var(--space-128) var(--space-0);

    @media (--for-desktop-up) {
        /* padding: 8em 10%; */
        gap: 0;
    }

    @media (--for-large-desktop-up) {

    }

    a {
        position: relative;
        text-decoration: none;
        
        &::after {   
            background-color:  hsl(0deg 100% 100%);
            content: '';
            height: 1px;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: -.15em;
        }

        &:hover {
            &::after {
                height: 2px;
            }
        }
    }

    h3 {
        text-align: center;
        color: hsl(var(--text-white-dm, var(--text-white)));

        @media (--for-desktop-up) {
            text-align: left;
        }
    }

    h2 {
        font-size: var(--step-3);
        font-family: var(--clocktower-serif);
        color: var(--footerText, #FFF);
        font-weight: var(--regular-weight);
        text-align: center;
        padding-bottom: var(--space-16);
        position: relative;
        margin-bottom: 1var(--space-8);
        display: inline-block;

        &::after {
            height: 1px;
            width: 100%;
            left: 0;
            content: '';
            background-color: #FFF;
            display: block;
            margin-top: 1var(--space-4);
            position: absolute;
            
            @media (--for-desktop-up) {
                left: 0;
                transform: unset;
                position: absolute;
                bottom: 0;
            }
        }

        @media (--for-desktop-up) {
            text-align: left;
            font-size: var(--step-1);
            position: relative;
        }

        @media (--for-large-desktop-up) {
            
        }
    }

    ul {
        list-style: none;
        padding-left: var(--space-0);
    }

    p, ul, a {
        --link-blue: 0, 100%, 100%;

        color: var(--footerText, #fff);
        font-size: var(--step--3);

        @media (--for-desktop-up) {
            font-size: var(--step--0);

        }
    }

    p {
        text-align: center;
        margin: 0 auto;
        font-size: var(--step-2);

        @media (--for-desktop-up) {
            font-size: var(--step-0);
            text-align: left;
            margin: 0;
            margin-bottom: var(--space-16);
        }
    }

    @media (--for-desktop-up) {
        flex-direction: row;
    }

    /* #block-footerleft {
        flex: 1 0 100%;
        text-align: center;

        @media (--for-desktop-up) {
            flex: 1 0 40%;
            text-align: left;

            p {
                max-width: 90%;
                
            }

            span {
                line-break: anywhere;
            }
        }

        .ftr-wrap {
            display: flex;
            flex-direction: column;
            text-align: center;

            @media (--for-tablet-portrait-up) {
                margin-top: var(--space-32);
                
            }

            @media (--for-desktop-up) {
                margin-top: 0;
                align-items: flex-start;
                position: relative;
                margin-left: var(--space-16);
                text-align: left;
            }

            @media (--for-large-desktop-up) {
                flex-direction: row;
                align-items: unset;
            }

            div {
                flex: 1 0 45%;

                &.ftr-left {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex: 0 0 50%;

                    @media (--for-desktop-up) {
                        justify-content: left;
                        align-self: flex-start;

                    }

                    p {
                        margin: 0 auto;
                        font-size: var(--step-2);
                        text-align: center; 

                        @media (--for-desktop-up) {
                            font-size: var(--step-0);
                            margin-top: 0;
                            margin-left: 1var(--space-4);
                            text-align: left;
                        }
                        
                    }
                                            
                }

                &.ftr-right {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex: auto;
                    padding-top: var(--space-16);

                    @media (--for-desktop-up) {
                        justify-content: left;
                        padding-top: 0;
                    }
                    
                    ul {
                        list-style: none;
                        margin: 0;
                        padding-left: 0;

                        @media (--for-phone-only) {
                            padding-left: 0;
                            margin: 0 auto;
                        }

                        li {
                            line-height: 2.25;
                            margin-bottom: var(--space-32);

                            @media (--for-phone-only) {
                                text-align: center;
                            }

                            @media (--for-desktop-up) {
                                margin-bottom: 10px;
                            }


                            a {
                                display: inline;
                                box-sizing: border-box;

                                &::after {
                                    content: unset;
                                }

                                span {
                                    position: relative;
                                    white-space: pre;

                                    &::after {   
                                        background-color:  hsl(0deg 100% 100%);
                                        content: '';
                                        height: 1px;
                                        width: 100%;
                                        position: absolute;
                                        left: 0;
                                        bottom: -.15em;
                                    }
                        
                                    font-size: var(--step-2);
                                    
                                    @media (--for-desktop-up) {
                                        font-size: var(--step-0);
                                    }
                                }

                                &:hover, &:focus {
                                    span {
                                        &::after {
                                            height: 2px;
                                        }
                                    }
                                }
    
                                &:not(:first-of-type) {
                                    margin-top: var(--space-16);
                                }
        
                                @media (--for-desktop-up) {
                                    margin: 0;
                                    margin-left: 1var(--space-8);
                                }
        
                                @media (--for-large-desktop-up) {
                                    margin-left: 0;
                                }
                            }
                        }
                    }
                }
            }

            .glyphicons {
                position: relative;
                font-size: var(--step-0);
                text-align: center;
                padding: 0;
                padding-bottom: var(--space-16);

                @media (--for-tablet-portrait-up) {
                    font-size: var(--step-1);
                    text-align: left;
                    
                }
                
                @media (--for-desktop-up) {
                    font-size: var(--step-0);
                    padding-bottom: 0;

                }
    
                &::before {
                    position: relative;
                    display: block;
                    font-size: var(--step-3);
                    text-align: center;

                    @media (--for-desktop-up) {
                        position: absolute;
                        left: -var(--space-32);
                        top: .15em;
                        font-size: var(--step-0);
                        padding-right: var(--space-8);


                    }
    
                }

                

            }
        }
        
    }

    #block-footermid {
        flex: 0 0 30%;
        padding: 0 var(--space-32);
        box-sizing: border-box;

        

    }

    #block-footerright {
        flex: 0 0 15%;

        > div {
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;

            @media (--for-large-desktop-up) {
                padding-left: 1var(--space-8);
                text-align: left;
            }

            ul {
                list-style: none;
                padding-left: 0;
                margin: 0 auto;

                li {
                    line-height: 1var(--space-8);
                    padding: var(--space-4) 0;
                    
                    @media (--for-desktop-up) {
                        text-align: left;
                    }

                    a {
                        text-decoration: none;
                        display: inline;

                        --background-height: .07em;
                        --link-underline-color: 0, 100%, 100%;

                        font-size: var(--step-0);

                        span {
                            font-size: var(--step-1);
                            
                            @media (--for-large-desktop-up) {
                                font-size: var(--step-0);
                            }
                        }
                    }
                }
            }

        }
        
    } */

        

    ul.footer-social {
        list-style: none;
        padding-left: 0;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--space-16);

        li {
            display: inline;
            
            a {
                font-family: var(--font-awesome-brands);
                text-decoration: none;
                font-size: var(--step-2);
                &::after {
                    content: unset;
                }

                &::before {
                    font-size: var(--step-6);

                    @media (--for-desktop-up) {
                        font-size: var(--step-5);
                    }

                    @media (--for-large-desktop-up) {
                        font-size: var(--step-4);

                    }
                }
            }
        }
    }

    @media (--for-desktop-up) {
        text-align: left;
    }
    

    .footer-secondary {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: hsl(var(--footer-background-secondary));

        --link-blue: 0, 100%, 100%;

        ul {
            display: flex;
            justify-content: center;
            box-sizing: border-box;
            min-height: 5em;
            align-items: center;
            flex-direction: column;
            list-style: none;
            margin: 0 auto;
            padding: var(--space-16) 0;

            @media (--for-desktop-up) {
                flex-direction: row;
                padding: var(--space-8) var(--space-32);
                bottom: 0;

            }            
            
            li {
                white-space: nowrap;
                position: relative;

                @media (--for-desktop-up) {
                    &:not(:last-of-type) {
                        &::after {
                            content: '';
                            height: 50%;
                            width: 1px;
                            display: inline-block;
                            background-color: #FFF;
                            color: rgb(255 255 255 / 50%);
                            position: absolute;
                            right: var(--space-0);
                            top: 50%;
                            transform: translateY(-25%);
                            font-size: var(--step-1);
                        }
                    }
                }

                a {
                    font-size: var(--step--1);
                    color: #FFF;
                    align-items: center;
                    position: relative;
                    margin: var(--space-4) var(--space-16);

                    --background-height: .07em;
                    --link-underline-color: 0, 100%, 100%;

                    text-decoration: none;
                    display: block;
                            
                    @media (--for-desktop-up) {
        
                        
                    }
        
                    
                    &::before {
                        font-weight: 600;
                        font-size: var(--step-0);
                        padding-right: var(--space-8);
                    }
                }
            }
        }


    }
    
}


.footer {
    text-align: center;
}