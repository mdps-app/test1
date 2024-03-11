<script>
</script>

<header id="header">
    <div id="titles">
        <img
            src="https://placehold.jp/100x100.png"
            alt="logo"
            id="title-logo"
        />
        <h1 id="title">備品管理システム<br />ーMDPSー</h1>
    </div>
    <ul id="menus">
        <li id="dashboardM">
            <a href="#dashboard">
                <p>ダッシュボード</p>
                <span class="material-symbols-outlined">dashboard</span>
            </a>
        </li>
        <li id="looksM">
            <a href="#looks">
                <p>一覧</p>
                <span class="material-symbols-outlined">database</span>
            </a>
        </li>
        <li id="mapM">
            <a href="#map">
                <p>配置図</p>
                <span class="material-symbols-outlined">map</span>
            </a>
        </li>
        <li id="settingM">
            <a href="#setting">
                <p>設定</p>
                <span class="material-symbols-outlined">settings</span>
            </a>
        </li>
        <li id="informationM">
            <a href="#information">
                <p>更新情報</p>
                <span class="material-symbols-outlined"> info</span>
            </a>
        </li>
        <li id="door">
            <p id="byM">by MDPT</p>
            <label for="checkbox"
                ><span class="material-symbols-outlined">menu</span></label
            >
        </li>
    </ul>
</header>

<style lang="scss">
    header {
        position: fixed;

        top: 0;
        left: 0;

        width: 400px;
        height: 100vh;

        display: grid;
        grid-template-rows: 100px 1fr;
        grid-template-columns: 1fr;

        background-color: #5eabd1;

        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        #titles {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
        }

        #menus {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
        }

        ul {
            margin: 0;
            padding: 0;

            margin-top: 40px;

            li {
                &:not(:last-child) {
                    list-style: none;

                    font-size: 1.5em;

                    margin: 3% 0;
                    display: grid;
                    place-items: center;

                    cursor: pointer;

                    .material-symbols-outlined {
                        font-size: 2em;
                        margin: 0 auto;
                        color: #274757;
                    }

                    a {
                        width: 100%;
                        display: grid;
                        grid-template-rows: 1fr;
                        grid-template-columns: 1fr 100px;
                        place-items: center;
                        justify-items: end;
                    }

                    p {
                        background: linear-gradient(
                            transparent 70%,
                            #73d0ff 70%
                        );
                    }
                }

                &:last-child {
                    list-style: none;

                    font-size: 1em;

                    margin: 3% 0;

                    cursor: pointer;

                    .material-symbols-outlined {
                        font-size: 2.5em;
                        margin: 0 auto;
                        color: #274757;
                    }

                    display: grid;
                    grid-template-rows: 1fr;
                    grid-template-columns: 1fr 100px;
                    place-items: center;
                    justify-items: left;
                    margin-left: 5%;
                }
            }
        }
    }

    #titles {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 100px;

        #title-logo {
            grid-row: 1 / 2;
            grid-column: 2 / 3;

            background-color: aliceblue;
        }

        #title {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
        }
    }

    #menus {
        display: grid;
        grid-template-rows: repeat(6, 1fr) 100px;
        grid-template-columns: 1fr;

        #dashboardM {
            grid-row: 1 / 2;
            grid-column: 1 / 2;
        }

        #looksM {
            grid-row: 2 / 3;
            grid-column: 1 / 2;
        }

        #mapM {
            grid-row: 3 / 4;
            grid-column: 1 / 2;
        }

        #settingM {
            grid-row: 4 / 5;
            grid-column: 1 / 2;
        }

        #informationM {
            grid-row: 5 / 6;
            grid-column: 1 / 2;
        }

        a {
            text-decoration: none;
            color: #274757;
        }

        #door {
            grid-row: 7 / 8;
            grid-column: 1 / 2;

            cursor: default;

            label {
                height: 48px;
                margin: 0 auto;

                span {
                    cursor: pointer;
                }
            }
        }
    }

    header {
        transform: translateX(-300px);
        transition: all 300ms 0s ease;
    }

    #triangle {
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-right: 20px solid #6ec8f5;
        border-bottom: 20px solid transparent;
        position: fixed;
        z-index: 1;
        top: calc(100px + 5vh + 3%);
        left: 380px;
        transform: translateX(-300px);
        transition: all 300ms 0s ease;
    }

    input[type="checkbox"] {
        display: none;

        &:checked {
            ~ header {
                transform: translateX(0px);
            }

            ~ #triangle {
                transform: translateX(0px);
            }
        }
    }
</style>
