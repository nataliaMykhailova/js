let userData = {
    gender: "",
    profession: "",
    avatar: "",
    points: {},
    artefacts: {},
    killedBosses:{},
    salary: 0,
    age: 0,
    workHours: 0,
    finStatus: "",
    family: "",
    kids: "",
    it_entry_age:"",
    it_experience:"",
    specialty_experience:"",
    job_title:"",
    english_proficiency:"",
    primary_programming_language:"",
    game_engines:"",
    settlement_type:"",
    contract_with:"",
    employment_type:"",
    work_arrangement:"",
    monetary_bonuses:"",
    salary_review_last_6_months:"",
    overtime_payment:"",
    salary_satisfaction:"",
    gaming_habits:"",
    gaming_platforms:"",

};



const visited = new Set();

let bossesData = {};
document.addEventListener("DOMContentLoaded", function () {

    const heroSection = document.querySelector(".hero-section-gd");
    const choiceSection = document.querySelector(".choice-section-gd");
    const charactersSection = document.querySelector(".characters-section-gd");
    const choiceItems = document.querySelectorAll(".choice-item-gd.choise-spec");
    const backButton = document.querySelector(".nav-back_btn-gd");
    const maleButton = document.querySelector(".male-btn-gd");
    const femaleButton = document.querySelector(".female-btn-gd");
    const charactersList = document.querySelector(".characters-list-gd");
    const continueButton = document.querySelector(".continue-btn-gd");
    const firstPartSection = document.querySelector(".first-part_section-gd");
    const backButtonPartOne = document.querySelector(".nav-back_btn-gd.is--partone");
    const continueButtonFirstPart = document.querySelector(".continue-btn-gd.first-part");
    const secondPartSection = document.querySelector(".second-part_section-gd");
    const backButtonSecondPart = document.querySelector(".nav-back_btn-gd.is--second-part");
    const continueButtonSecondPart = document.querySelector(".continue-btn-gd.second-part");
    const armorySection = document.querySelector(".armory-section-gd");
    const backButtonArmory = document.querySelector(".nav-back_btn-gd.is--armory");
    const continueButtonArmory = document.querySelector(".continue-btn-gd.armory.w-button");
    const mapSection = document.querySelector(".map-section-gd");
    const backButtonMap = document.querySelector(".nav-back_btn-gd.is--map");
    const tavernaMapButton = document.querySelector(".nav-btn-gd.taverna-map");
    const tavernSection = document.querySelector(".tavern-section-gd");
    const skarbnitsiaMapButton = document.querySelector(".nav-btn-gd.skarbnitsia-map");
    const treasurySection = document.querySelector(".treasury-section-gd");
    const portMapButton = document.querySelector(".nav-btn-gd.port-map");
    const portSection = document.querySelector(".port-section-gd");
    const bossBackButton = document.querySelector(".nav-back_btn-gd.is--boss-map");
    const bossMapButton = document.querySelector(".nav-btn-gd.is--map.boss-map");
    const bossesSection = document.querySelector(".boses-section-gd");


    if (!heroSection || !choiceSection || !charactersSection || !backButton || !maleButton || !femaleButton || !charactersList) {
        console.error("Помилка: один або більше елементів не знайдено!");
        return;
    }

    // Завантаження даних з JSON-файлу

    const dataUrl = 'https://raw.githubusercontent.com/nataliaMykhailova/js/refs/heads/master/gameDev/gameDev.json';
    let professionsData = {};

    fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
            professionsData = data;
            initializeBosses();
            displayProfessions(professionsData.male);
            userData.gender = "male";
            console.log(userData);

        })
        .catch(error => {
            console.error("Помилка завантаження даних:", error);
        });


    function initializeBosses() {
        if (!professionsData.bosses) {
            console.error("❌ Дані про босів відсутні!");
            return;
        }

        bossesData = {};

        Object.keys(professionsData.bosses).forEach(bossName => {
            bossesData[bossName] = {
                ...professionsData.bosses[bossName],
                totalPoints: parseInt(professionsData.bosses[bossName].points) || 0
            };
        });

        console.log("🛡 Боси ініціалізовані:", bossesData);
    }

    // Функція для створення елемента професії

    function createProfessionItem(profession) {
        const itemWrapper = document.createElement('div');
        itemWrapper.className = 'character-item_wrapper-gd';

        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'character-img_wrapper-gd';

        const img = document.createElement('img');
        img.src = profession.avatar;
        img.alt = profession.name;
        img.className = 'character-img-gd';

        const name = document.createElement('p');
        name.className = 'p-14_calipso-gd is--uppercase is--absolute character-name-gd';
        name.innerHTML = profession.name;

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(name);

        const descWrapper = document.createElement('div');
        descWrapper.className = 'character-descr_wrapper-gd';

        const desc = document.createElement('p');
        desc.className = 'p-14-gilroy-gd is--centr character-desc-gd';
        desc.innerHTML = profession.description;

        descWrapper.appendChild(desc);

        itemWrapper.appendChild(imgWrapper);
        itemWrapper.appendChild(descWrapper);

        return itemWrapper;
    }

    function displayProfessions(professions) {
        charactersList.innerHTML = '';

        for (const key in professions) {
            if (professions.hasOwnProperty(key)) {
                const profession = professions[key];
                const professionItem = createProfessionItem(profession);

                professionItem.addEventListener("click", function () {
                    selectProfession(professionItem);
                    updateContinueButton();
                    updateTotalUserPoints();
                    updateProfileBlocks()
                });

                charactersList.appendChild(professionItem);
            }
        }
    }


    // скидання даних користувача

    function resetUserData(keepGender = false) {
        if (!keepGender) {
            userData.gender = "";
        }
        userData.profession = "";
        userData.avatar = "";
        userData.points = {};
        userData.artefacts = {};
        userData.killedBosses = {};
        userData.salary = 0;
        userData.age = 0;
        userData.workHours = 0;
        userData.finStatus = "";
        userData.family = "";
        userData.kids = "";
        userData.it_entry_age ="";
        userData.it_experience ="";
        userData.specialty_experience ="";
        userData.job_title ="";
        userData.english_proficiency ="";
        userData. primary_programming_language ="";
        userData.game_engines = "";
        userData.settlement_type = "";
        userData.contract_with ="";
        userData.employment_type ="";
        userData.work_arrangement ="";
        userData.monetary_bonuses ="";
        userData.salary_review_last_6_months ="";
        userData.overtime_payment ="";
        userData.salary_satisfaction ="";
        userData.gaming_habits ="";
        userData.gaming_platforms ="";

        console.log("Дані користувача скинуто", userData);

        document.querySelectorAll(".character-item_wrapper-gd").forEach(item => {
            item.style.opacity = "1";
            item.querySelector(".character-img-gd").style.filter = "none";
        });

        updateContinueButton();
    }

// функція вибору персонажа
    function selectProfession(selectedItem) {

        Object.keys(bossesData).forEach(boss => {
            Object.keys(bossesData[boss]).forEach(key => {
                if (!["name", "description", "img", "damage", "points", "totalPoints"].includes(key)) {
                    delete bossesData[boss][key];
                }
            });

            updateTotalBossPoints();
            handleEngineBlockVisibility();
            toggleLanguageBlockVisibility()
        });

        console.log("🔄 Боси очищені після вибору нової професії:", bossesData);

        userData.artefacts = {};
        document.querySelectorAll(".active").forEach(activeBlock => {
            activeBlock.classList.remove("active");
        });
        document.querySelectorAll(".character-item_wrapper-gd").forEach(item => {
            item.style.opacity = "0.5";
            item.querySelector(".character-img-gd").style.filter = "none";
        });

        selectedItem.style.opacity = "1";
        selectedItem.querySelector(".character-img-gd").style.filter = "drop-shadow(0px 0px 10px rgba(255, 215, 162, 0.9)) drop-shadow(0px 0px 8px rgba(255, 215, 162, 0.7))";

        userData.profession = selectedItem.querySelector(".character-name-gd").textContent.trim();
        userData.avatar = selectedItem.querySelector(".character-img-gd").src;
        console.log("Вибрана професія:", userData.profession);
        updateContinueButton();
        filterAndUpdateData();
        updateTotalUserPoints();
        updateProfileBlocks();
    }

    function updateContinueButton() {
        if (userData.profession) {
            continueButton.classList.remove("disabled");
            continueButton.style.pointerEvents = "auto";
            continueButton.style.opacity = "1";
        } else {
            continueButton.classList.add("disabled");
            continueButton.style.pointerEvents = "none";
            continueButton.style.opacity = "0.5";
        }
    }

    function updateExpTopLines(config) {
        Object.keys(config).forEach(className => {
            document.querySelectorAll(`.exp-flex-gd.${className}`).forEach(block => {
                const topLines = block.querySelectorAll(".exp-top_line-gd");

                if (topLines.length !== 3) {
                    console.error(`❌ Очікується рівно 3 'exp-top_line-gd' в .${className}, знайдено:`, topLines.length);
                    return;
                }

                const points = [
                    {p1: config[className].line_1_point_1, p2: config[className].line_1_point_2},
                    {p1: config[className].line_2_point_1, p2: config[className].line_2_point_2},
                    {p1: config[className].line_3_point_1, p2: config[className].line_3_point_2}
                ];

                topLines.forEach((line, index) => {
                    if (points[index]) {
                        const {p1, p2} = points[index];
                        line.style.setProperty("--p1", p1);
                        line.style.setProperty("--p2", p2);
                    }
                });
            });
        });
    }

// Виклик функції для блоку `exp_it`


    // Функція для перемикання активної кнопки
    function toggleActiveGender(activeButton, inactiveButton) {
        activeButton.style.background = "#FFD7A2";
        activeButton.style.color = "#000";
        inactiveButton.style.background = "rgba(0, 0, 0, 0.10)";
        inactiveButton.style.color = "#FFD7A2";
    }

    toggleActiveGender(maleButton, femaleButton);


    // Обробники подій для кнопок male/female
    maleButton.addEventListener("click", function () {
        userData.gender = "male";
        resetUserData(true);
        toggleActiveGender(maleButton, femaleButton);
        displayProfessions(professionsData.male);
    });

    femaleButton.addEventListener("click", function () {
        userData.gender = "female";
        resetUserData(true);
        toggleActiveGender(femaleButton, maleButton);
        displayProfessions(professionsData.female);

    });


    // Початкова анімація переходів між секціями
    setTimeout(() => {
        heroSection.classList.remove("visible");
        setTimeout(() => {
            heroSection.style.display = "none";
            choiceSection.style.display = "block";
            setTimeout(() => {
                choiceSection.classList.add("visible");
            }, 0);
        }, 0);
    }, 3000);


    // Переходи між секціями при виборі професії
    choiceItems.forEach(item => {
        item.addEventListener("click", function () {
            choiceSection.classList.remove("visible");
            setTimeout(() => {
                choiceSection.style.display = "none";
                charactersSection.style.display = "block";
                setTimeout(() => {
                    charactersSection.classList.add("visible");

                    if (userData.gender && professionsData[userData.gender]) {
                        displayProfessions(professionsData[userData.gender]);
                    }
                }, 0);
            }, 0);
        });
    });


// кнопка continue в секції з персонажами
    continueButton.addEventListener("click", function () {
        if (!userData.profession) return;

        charactersSection.classList.remove("visible");
        setTimeout(() => {
            charactersSection.style.display = "none";
            firstPartSection.style.display = "block";
            setTimeout(() => {
                firstPartSection.classList.add("visible");
                updateTotalUserPoints();
                updateProfileBlocks();
            }, 0);
        }, 0);
    });

    continueButtonFirstPart.addEventListener("click", function () {
        firstPartSection.classList.remove("visible");
        setTimeout(() => {
            firstPartSection.style.display = "none";
            secondPartSection.style.display = "block";
            setTimeout(() => {
                secondPartSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    continueButtonSecondPart.addEventListener("click", function () {
        secondPartSection.classList.remove("visible");

        setTimeout(() => {
            secondPartSection.style.display = "none";
            armorySection.style.display = "block";

            setTimeout(() => {
                armorySection.classList.add("visible");
            }, 0);
        }, 0);
    });

    continueButtonArmory.addEventListener("click", function () {
        armorySection.classList.remove("visible");

        setTimeout(() => {
            armorySection.style.display = "none";
            mapSection.style.display = "block";

            setTimeout(() => {
                mapSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    tavernaMapButton.addEventListener("click", function () {
        // Приховуємо таверну
        tavernSection.classList.remove("visible");

        setTimeout(() => {
            tavernSection.style.display = "none";
            mapSection.style.display = "block";

            // Додаємо видимість мапі
            setTimeout(() => {
                mapSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    skarbnitsiaMapButton.addEventListener("click", function () {
        // Приховуємо скарбницю
        treasurySection.classList.remove("visible");

        setTimeout(() => {
            treasurySection.style.display = "none";
            mapSection.style.display = "block";

            // Додаємо видимість мапі
            setTimeout(() => {
                mapSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    portMapButton.addEventListener("click", function () {
        // Приховуємо порт
        portSection.classList.remove("visible");

        setTimeout(() => {
            portSection.style.display = "none";
            mapSection.style.display = "block";

            // Додаємо видимість мапі
            setTimeout(() => {
                mapSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    function showMapFromBosses() {
        if (!bossesSection || !mapSection) return;

        bossesSection.classList.remove("visible");

        setTimeout(() => {
            bossesSection.style.display = "none";
            mapSection.style.display = "block";

            setTimeout(() => {
                mapSection.classList.add("visible");
            }, 0);
        }, 0);
    }

    bossBackButton?.addEventListener("click", showMapFromBosses);
    bossMapButton?.addEventListener("click", showMapFromBosses);

    // Повернення до вибору професії
    backButton.addEventListener("click", function () {
        resetUserData(true);
        charactersSection.classList.remove("visible");
        setTimeout(() => {
            charactersSection.style.display = "none";
            choiceSection.style.display = "block";
            setTimeout(() => {
                choiceSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    backButtonSecondPart.addEventListener("click", function () {
        secondPartSection.classList.remove("visible");
        setTimeout(() => {
            secondPartSection.style.display = "none";
            firstPartSection.style.display = "block";
            setTimeout(() => {
                firstPartSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    backButtonArmory.addEventListener("click", function () {
        armorySection.classList.remove("visible");

        setTimeout(() => {
            armorySection.style.display = "none";
            secondPartSection.style.display = "block";

            setTimeout(() => {
                secondPartSection.classList.add("visible");
            }, 0);
        }, 0);
    });

    backButtonMap.addEventListener("click", function () {
        mapSection.classList.remove("visible");

        setTimeout(() => {
            mapSection.style.display = "none";
            armorySection.style.display = "block";

            setTimeout(() => {
                armorySection.classList.add("visible");
            }, 0);
        }, 0);
    });


    // заповнюємо блок профілю

    function updateProfileBlocks() {
        document.querySelectorAll(".profile-block-gd").forEach(profileBlock => {
            const positionElement = profileBlock.querySelector(".user-position");
            if (positionElement) {
                positionElement.textContent = userData.profession || "Невідома професія";
            }

            const photoElement = profileBlock.querySelector(".profile-photo-gd");
            if (photoElement) {
                photoElement.src = userData.avatar || "https://via.placeholder.com/150"; // Заглушка, якщо немає фото
            }

            const pointsElement = profileBlock.querySelector(".profile-point-gd");
            if (pointsElement) {
                console.log("🎯 userData.points:", userData.points);
                console.log("📌 Total Points:", userData.points?.total);

                pointsElement.textContent = (userData.points && typeof userData.points.total === "number")
                    ? userData.points.total
                    : "0";
            }

            const artifactsContainer = profileBlock.querySelector(".artifact-block-gd");
            if (artifactsContainer) {
                artifactsContainer.innerHTML = "";

                artifactsContainer.innerHTML = "";

                Object.values(userData.artefacts).forEach(artifactSrc => {
                    if (artifactSrc) {
                        const artifactImg = document.createElement("img");
                        artifactImg.src = artifactSrc;
                        artifactImg.alt = "Артефакт";
                        artifactImg.classList.add("artifact-img-gd");
                        artifactsContainer.appendChild(artifactImg);
                    }
                });
            }
        });
    }

// повернення назад у парт 1 секції
    backButtonPartOne.addEventListener("click", function () {
        firstPartSection.classList.remove("visible");
        setTimeout(() => {
            firstPartSection.style.display = "none";
            charactersSection.style.display = "block";
            setTimeout(() => {
                charactersSection.classList.add("visible");
            }, 0);
        }, 0);
    });


// range

    function initRangeGd(overrides = {}) {
        document.querySelectorAll('.range-gd').forEach(range => {
            let sliderType = null;
            range.classList.forEach(cls => {
                if (cls !== 'range-gd' && overrides.hasOwnProperty(cls)) {
                    sliderType = cls;
                }
            });

            let minVal = 0, midVal = 50, maxVal = 100;
            if (sliderType) {
                minVal = overrides[sliderType].min || 0;
                midVal = overrides[sliderType].mid || 50;
                maxVal = overrides[sliderType].max || 100;
            }

            const track = range.querySelector('.range-track-gd');
            const thumb = range.querySelector('.range-thumb-gd');
            const popup = range.closest('.range-wrapper-gd')?.querySelector('.range-popup-gd');
            const popupText = popup?.querySelector('.range-popup_text-gd');
            let dragging = false;

            thumb.style.left = '0%';
            if (popup) popup.style.left = '0%';
            if (popupText) popupText.textContent = minVal + "р.";

            function logValue(value) {
                console.log(`Значення (${sliderType || "default"}): ${value}`);
            }

            function startDrag() {
                dragging = true;
            }

            thumb.addEventListener('mousedown', startDrag);
            thumb.addEventListener('touchstart', startDrag, {passive: true});

            function updatePosition(e) {
                if (!dragging) return;

                const rect = track.getBoundingClientRect();
                let x;

                if (e.type === "touchmove") {
                    x = e.touches[0].clientX - rect.left;
                } else {
                    x = e.clientX - rect.left;
                }

                x = Math.max(0, Math.min(x, rect.width));
                const percentage = (x / rect.width) * 100;
                thumb.style.left = percentage + '%';

                if (popup) popup.style.left = percentage + '%';

                let value;
                if (percentage <= 50) {
                    value = minVal + ((midVal - minVal) * (percentage / 50));
                } else {
                    value = midVal + ((maxVal - midVal) * ((percentage - 50) / 50));
                }

                value = Math.round(value);

                logValue(value);

                if (sliderType === "salery") {
                    userData.salary = value;
                    assignSalaryArtefact(value, minVal, midVal, maxVal);
                }

                if (popupText) popupText.textContent = value + "р.";

                if (sliderType === "age") {
                    userData.age = value;
                }

                if (sliderType === "age-it") {
                    userData.age = value;
                }

                if (sliderType === "hour") {
                    updateHourPoints(value);
                }
            }

            document.addEventListener('mousemove', updatePosition);
            document.addEventListener('touchmove', updatePosition, {passive: false});

            function stopDrag() {
                dragging = false;
            }

            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
        });
    }


    function updateHourPoints(value) {
        let points = 0;

        Object.keys(bossesData).forEach(boss => {
            delete bossesData[boss].hourPoints;
        });

        if (value === 1) {
            points = 0;
            addBossPoints("Deadline", 1, "hourPoints");
            addBossPoints("Overtime", 1, "hourPoints");
        } else if (value === 2) {
            points = 1;
        } else if (value === 3) {
            points = 2;
            addBossPoints("Burnout", 1, "hourPoints");
        }
        addUserPoints("hourPoints", points);
    }

    function addUserPoints(category, points) {
        if (!userData.points) {
            userData.points = {};
        }

        userData.points[category] = points;

        console.log(`✅ Користувач отримав ${points} бал(ів) за ${category}`);

        updateTotalUserPoints();
        updateProfileBlocks();
    }

    function updateTotalUserPoints() {
        let total = 0;

        Object.keys(userData.points).forEach(key => {
            if (key !== "total" && typeof userData.points[key] === "number") {
                total += userData.points[key];
            }
        });

        userData.points.total = total;

        console.log(`📊 Загальна кількість балів користувача: ${userData.points.total}`);
    }


    function filterAndUpdateData() {
        if (!professionsData || Object.keys(professionsData).length === 0) {
            console.error("❌ Помилка: Дані JSON ще не завантажені.");
            return;
        }
        if (!userData.gender || !userData.profession) {
            console.error("❌ Помилка: Не вибрано гендер або професію.");
            console.log(userData);
            return;
        }

        const genderData = professionsData[userData.gender];
        if (!genderData) {
            console.error("❌ Помилка: Дані для обраного гендеру не знайдені.");
            return;
        }

        const professionData = genderData[userData.profession];
        if (!professionData) {
            console.error("❌ Помилка: Дані про професію не знайдені.");
            return;
        }

        document.querySelector(".salary-min").textContent = professionData.salary.lowest;
        document.querySelector(".salary-everage").textContent = professionData.salary.median;
        document.querySelector(".salary-max").textContent = professionData.salary.highest;

        document.querySelector(".age-min").textContent = professionData.age.youngest;
        document.querySelector(".age-average").textContent = professionData.age.median;
        document.querySelector(".age-max").textContent = professionData.age.oldest;


        document.querySelector(".workhourperweek").textContent = professionData.working_hours_per_week;


        document.querySelector(".spendmore").textContent = professionData.financial_status.spend_more_than_earn;
        document.querySelector(".spendequalearn").textContent = professionData.financial_status.spend_equal_to_earn;
        document.querySelector(".ernmore").textContent = professionData.financial_status.spend_less_than_earn;

        document.querySelectorAll(".static-line_track-wrapper-gd-2")[0].style.width = professionData.financial_status.spend_more_than_earn + "%";
        document.querySelectorAll(".static-line_track-wrapper-gd-2")[1].style.width = professionData.financial_status.spend_equal_to_earn + "%";
        document.querySelectorAll(".static-line_track-wrapper-gd-2")[2].style.width = professionData.financial_status.spend_less_than_earn + "%";


        document.querySelector(".family-single").textContent = professionData.marital_status.single;
        document.querySelector(".family-relationship").textContent = professionData.marital_status.in_relationship;
        document.querySelector(".family-married").textContent = professionData.marital_status.married;
        document.querySelector(".family-cohabiting").textContent = professionData.marital_status.cohabiting;

        document.querySelectorAll(".static-gorizontal_fill-gd")[0].style.width = professionData.marital_status.single + "%";
        document.querySelectorAll(".static-gorizontal_fill-gd")[1].style.width = professionData.marital_status.in_relationship + "%";
        document.querySelectorAll(".static-gorizontal_fill-gd")[2].style.width = professionData.marital_status.married + "%";
        document.querySelectorAll(".static-gorizontal_fill-gd")[3].style.width = professionData.marital_status.cohabiting + "%";


        document.querySelector(".have-children").textContent = professionData.children.have_children;
        document.querySelector(".no-children").textContent = professionData.children.no_children;

        document.querySelectorAll(".static-line_track-wrapper-gd-2")[3].style.width = professionData.children.have_children + "%";
        document.querySelectorAll(".static-line_track-wrapper-gd-2")[4].style.width = professionData.children.no_children + "%";

        document.querySelector(".age-it-min").textContent = professionData.it_entry_age.youngest;
        document.querySelector(".age-it-average").textContent = professionData.it_entry_age.median;
        document.querySelector(".age-it-max").textContent = professionData.it_entry_age.oldest;

        document.querySelector(".exp-it-1-2").textContent = professionData.it_experience["1-2_years"] + "%";
        document.querySelector(".exp-it-3-5").textContent = professionData.it_experience["3-5_years"] + "%";
        document.querySelector(".exp-it-6-9").textContent = professionData.it_experience["6-9_years"] + "%";
        document.querySelector(".exp-it-10").textContent = professionData.it_experience["10+_years"] + "%";

        document.querySelector(".exp-spec-1-2").textContent = professionData.specialty_experience["1-2_years"] + "%";
        document.querySelector(".exp-spec-3-5").textContent = professionData.specialty_experience["3-5_years"] + "%";
        document.querySelector(".exp-spec-6-9").textContent = professionData.specialty_experience["6-9_years"] + "%";
        document.querySelector(".exp-spec-10").textContent = professionData.specialty_experience["10+_years"] + "%";


        document.querySelector(".exp-it-line-1-2").style.height = professionData.it_experience["1-2_years"] + "%";
        document.querySelector(".exp-it-line-3-5").style.height = professionData.it_experience["3-5_years"] + "%";
        document.querySelector(".exp-it-line-6-9").style.height = professionData.it_experience["6-9_years"] + "%";
        document.querySelector(".exp-it-line-10").style.height = professionData.it_experience["10+_years"] + "%";

        document.querySelector(".exp-spec-line-1-2").style.height = professionData.specialty_experience["1-2_years"] + "%";
        document.querySelector(".exp-spec-line-3-5").style.height = professionData.specialty_experience["3-5_years"] + "%";
        document.querySelector(".exp-spec-line-6-9").style.height = professionData.specialty_experience["6-9_years"] + "%";
        document.querySelector(".exp-spec-line-10").style.height = professionData.specialty_experience["10+_years"] + "%";

        document.querySelector(".exp-fact-text").textContent = professionData.specialty_experience["comment"];
        document.querySelector(".lang-fact-text").textContent = professionData.english_proficiency["comment"];



        document.querySelector(".p-10-gilroy.title-junior").textContent = professionData.job_title["junior"] + "%";
        document.querySelector(".p-10-gilroy.title-middle").textContent = professionData.job_title["middle"] + "%";
        document.querySelector(".p-10-gilroy.title-senior").textContent = professionData.job_title["senior"] + "%";
        document.querySelector(".p-10-gilroy.title-team-lead").textContent = professionData.job_title["team_tech_lead"] + "%";

        document.querySelector(".junior-block").style.height = professionData.job_title["junior"] + "%";
        document.querySelector(".middle-block").style.height = professionData.job_title["middle"] + "%";
        document.querySelector(".senior-block").style.height = professionData.job_title["senior"] + "%";
        document.querySelector(".team-lead-block").style.height = professionData.job_title["team_tech_lead"] + "%";

        document.querySelector(".pre-intermediate-text").textContent = professionData.english_proficiency["pre_intermediate"] + "%";
        document.querySelector(".intermediate-text").textContent = professionData.english_proficiency["intermediate"] + "%";
        document.querySelector(".upper-intermediate-text").textContent = professionData.english_proficiency["upper_intermediate"] + "%";
        document.querySelector(".advanced-text").textContent = professionData.english_proficiency["advanced"] + "%";

        document.querySelector(".pre-intermediate-line").style.width = professionData.english_proficiency["pre_intermediate"] + "%";
        document.querySelector(".intermediate-line").style.width = professionData.english_proficiency["intermediate"] + "%";
        document.querySelector(".upper-intermediate-line").style.width = professionData.english_proficiency["upper_intermediate"] + "%";
        document.querySelector(".advanced-line").style.width = professionData.english_proficiency["advanced"] + "%";


        document.querySelector(".p-10-gilroy.is--unity-text").textContent = professionData.game_engines["unity"] + "%";
        document.querySelector(".p-10-gilroy.is--unreal-text").textContent = professionData.game_engines["unreal_engine"] + "%";
        document.querySelector(".p-10-gilroy.is--no-work-text").textContent = professionData.game_engines["none"] + "%";
        document.querySelector(".p-10-gilroy.is--other-text").textContent = professionData.game_engines["other_engine"] + "%";

        document.querySelector(".is--unity-line").style.height = professionData.game_engines["unity"] + "%";
        document.querySelector(".is--unreal-line").style.height = professionData.game_engines["unreal_engine"] + "%";
        document.querySelector(".is-no-work-line").style.height = professionData.game_engines["none"] + "%";
        document.querySelector(".is--other-line").style.height = professionData.game_engines["other_engine"] + "%";

        document.querySelector(".p-10-gilroy.gold.csharp_dotnet").textContent = professionData.primary_programming_language["csharp_dotnet"] + "%";
        document.querySelector(".programming-fill-gd.csharp_dotnet").style.width = professionData.primary_programming_language["csharp_dotnet"] + "%";

        document.querySelector(".p-10-gilroy.gold.java").textContent = professionData.primary_programming_language["java"] + "%";
        document.querySelector(".programming-fill-gd.java").style.width = professionData.primary_programming_language["java"] + "%";

        document.querySelector(".p-10-gilroy.gold.python").textContent = professionData.primary_programming_language["python"] + "%";
        document.querySelector(".programming-fill-gd.python").style.width = professionData.primary_programming_language["python"] + "%";

        document.querySelector(".p-10-gilroy.gold.c").textContent = professionData.primary_programming_language["c++"] + "%";
        document.querySelector(".programming-fill-gd.c").style.width = professionData.primary_programming_language["c++"] + "%";

        document.querySelector(".p-10-gilroy.gold.javascript").textContent = professionData.primary_programming_language["javascript"] + "%";
        document.querySelector(".programming-fill-gd.javascript").style.width = professionData.primary_programming_language["javascript"] + "%";

        document.querySelector(".p-10-gilroy.gold.typescript").textContent = professionData.primary_programming_language["typescript"] + "%";
        document.querySelector(".programming-fill-gd.typescript").style.width = professionData.primary_programming_language["typescript"] + "%";

        document.querySelector(".p-10-gilroy.gold.other_languages").textContent = professionData.primary_programming_language["other_languages"] + "%";
        document.querySelector(".programming-fill-gd.other_languages").style.width = professionData.primary_programming_language["other_languages"] + "%";

        document.querySelector(".kyiv_region").textContent = professionData.location["kyiv_region"] + "%";
        document.querySelector(".lviv_region").textContent = professionData.location["lviv_region"] + "%";
        document.querySelector(".kharkiv_region").textContent = professionData.location["kharkiv_region"] + "%";
        document.querySelector(".vinnytsia_region").textContent = professionData.location["vinnytsia_region"] + "%";
        document.querySelector(".dnipro_region").textContent = professionData.location["dnipro_region"] + "%";
        document.querySelector(".rivne_region").textContent = professionData.location["rivne_region"] + "%";
        document.querySelector(".poltava_region").textContent = professionData.location["poltava_region"] + "%";
        document.querySelector(".odesa_region").textContent = professionData.location["odesa_region"] + "%";
        document.querySelector(".ivano_frankivsk_region").textContent = professionData.location["ivano_frankivsk_region"] + "%";
        document.querySelector(".cherkasy_region").textContent = professionData.location["cherkasy_region"] + "%";
        document.querySelector(".uzhhorod_region").textContent = professionData.location["uzhhorod_region"] + "%";
        document.querySelector(".mykolaiv_region").textContent = professionData.location["mykolaiv_region"] + "%";
        document.querySelector(".zhytomyr_region").textContent = professionData.location["zhytomyr_region"] + "%";
        document.querySelector(".chernihiv_region").textContent = professionData.location["chernihiv_region"] + "%";
        document.querySelector(".lutsk_volyn_region").textContent = professionData.location["lutsk_volyn_region"] + "%";
        document.querySelector(".khmelnytskyi_region").textContent = professionData.location["khmelnytskyi_region"] + "%";
        document.querySelector(".ternopil_region").textContent = professionData.location["ternopil_region"] + "%";
        document.querySelector(".chernivtsi_region").textContent = professionData.location["chernivtsi_region"] + "%";
        document.querySelector(".sumy_region").textContent = professionData.location["sumy_region"] + "%";
        document.querySelector(".kropyvnytskyi_region").textContent = professionData.location["kropyvnytskyi_region"] + "%";
        document.querySelector(".zaporizhzhia_region").textContent = professionData.location["zaporizhzhia_region"] + "%";

        document.querySelector(".settlement-item-gd.rural_area .p-20-gilroy-gd").textContent = professionData.settlement_type["rural_area"] + "%";
        document.querySelector(".settlement-item-gd.small_city .p-20-gilroy-gd").textContent = professionData.settlement_type["small_city"] + "%";
        document.querySelector(".settlement-item-gd.big_city .p-20-gilroy-gd").textContent = professionData.settlement_type["big_city"] + "%";


        document.querySelector(".yes-answer-gd").textContent =  professionData.gaming_habits["play_games"] ;
        document.querySelector(".no-answer-gd").textContent =  professionData.gaming_habits["do_not_play"] ;
        document.querySelector(".yes-line-gd").style.width = professionData.gaming_habits["play_games"] + "%";
        document.querySelector(".no-line-gd").style.width = professionData.gaming_habits["do_not_play"] + "%";

        document.querySelector(".p-10-gilroy.gold.do_not_receive").textContent = professionData.monetary_bonuses["do_not_receive"] + "%";
        document.querySelector(".p-10-gilroy.gold.receive").textContent = professionData.monetary_bonuses["receive"] + "%";
        document.querySelector(".p-10-gilroy.gold.received_before").textContent = professionData.monetary_bonuses["received_before"] + "%";

        document.querySelector(".bonus-fill-gd.do_not_receive").style.width = professionData.monetary_bonuses["do_not_receive"] + "%";
        document.querySelector(".bonus-fill-gd.receive").style.width = professionData.monetary_bonuses["receive"] + "%";
        document.querySelector(".bonus-fill-gd.received_before").style.width = professionData.monetary_bonuses["received_before"] + "%";

        document.querySelector(".p-10-gilroy.gold.overtime.fully_paid").textContent = professionData.overtime_payment["fully_paid"] + "%";
        document.querySelector(".programming-fill-gd.fully_paid").style.width = professionData.overtime_payment["fully_paid"] + "%";

        document.querySelector(".p-10-gilroy.gold.overtime.partially_paid").textContent = professionData.overtime_payment["partially_paid"] + "%";
        document.querySelector(".programming-fill-gd.partially_paid").style.width = professionData.overtime_payment["partially_paid"] + "%";

        document.querySelector(".p-10-gilroy.gold.overtime.not_paid").textContent = professionData.overtime_payment["not_paid"] + "%";
        document.querySelector(".programming-fill-gd.not_paid").style.width = professionData.overtime_payment["not_paid"] + "%";

        document.querySelector(".p-10-gilroy.gold.overtime.no_overtime").textContent = professionData.overtime_payment["no_overtime"] + "%";
        document.querySelector(".programming-fill-gd.no_overtime").style.width = professionData.overtime_payment["no_overtime"] + "%";

        document.querySelector(".p-10-gilroy.gold.overtime.freelance").textContent = professionData.overtime_payment["freelance"] + "%";
        document.querySelector(".programming-fill-gd.freelance").style.width = professionData.overtime_payment["freelance"] + "%";

        document.querySelector(".p-10-gilroy.gold.revision.no_review").textContent = professionData.salary_review_last_6_months["no_review"] + "%";
        document.querySelector(".p-10-gilroy.gold.revision.review_without_promotion").textContent = professionData.salary_review_last_6_months["review_without_promotion"] + "%";
        document.querySelector(".p-10-gilroy.gold.revision.review_due_to_new_company").textContent = professionData.salary_review_last_6_months["review_due_to_new_company"] + "%";
        document.querySelector(".p-10-gilroy.gold.revision.review_due_to_promotion").textContent = professionData.salary_review_last_6_months["review_due_to_promotion"] + "%";

        document.querySelector(".revision-fill-gd.no_review").style.transform = `rotate(${professionData.salary_review_last_6_months["no_review"] / 100 * 180}deg)`;
        document.querySelector(".revision-fill-gd.review_without_promotion").style.transform = `rotate(${professionData.salary_review_last_6_months["review_without_promotion"] / 100 * 180}deg)`;
        document.querySelector(".revision-fill-gd.review_due_to_new_company").style.transform = `rotate(${professionData.salary_review_last_6_months["review_due_to_new_company"] / 100 * 180}deg)`;
        document.querySelector(".revision-fill-gd.review_due_to_promotion").style.transform = `rotate(${professionData.salary_review_last_6_months["review_due_to_promotion"] / 100 * 180}deg)`;

        document.querySelector(".p-10-gilroy.satisfied").textContent = professionData.salary_satisfaction["satisfied"] + "%";
        document.querySelector(".p-10-gilroy.mostly_satisfied").textContent = professionData.salary_satisfaction["mostly_satisfied"] + "%";
        document.querySelector(".p-10-gilroy.not_satisfied").textContent = professionData.salary_satisfaction["not_satisfied"] + "%";

        document.querySelector(".title-block_item-fill-gd.satisfied").style.height = professionData.salary_satisfaction["satisfied"] + "%";
        document.querySelector(".title-block_item-fill-gd.mostly_satisfied").style.height = professionData.salary_satisfaction["mostly_satisfied"] + "%";
        document.querySelector(".title-block_item-fill-gd.not_satisfied").style.height = professionData.salary_satisfaction["not_satisfied"] + "%";

        document.querySelector(".lang-text.p-10-gilroy-2.gold.gig_contract").textContent = professionData.employment_type["gig_contract"] + "%";
        document.querySelector(".static-line_track-wrapper-gd.gig_contract").style.width = professionData.employment_type["gig_contract"] + "%";

        document.querySelector(".lang-text.p-10-gilroy-2.gold.foreign_contract").textContent = professionData.employment_type["foreign_contract"] + "%";
        document.querySelector(".static-line_track-wrapper-gd.foreign_contract").style.width = professionData.employment_type["foreign_contract"] + "%";

        document.querySelector(".lang-text.p-10-gilroy-2.gold.minimum_salary_rest_in_cash").textContent = professionData.employment_type["minimum_salary_rest_in_cash"] + "%";
        document.querySelector(".static-line_track-wrapper-gd.minimum_salary_rest_in_cash").style.width = professionData.employment_type["minimum_salary_rest_in_cash"] + "%";

        document.querySelector(".lang-text.p-10-gilroy-2.gold.official_ukrainian_labor_code").textContent = professionData.employment_type["official_ukrainian_labor_code"] + "%";
        document.querySelector(".static-line_track-wrapper-gd.official_ukrainian_labor_code").style.width = professionData.employment_type["official_ukrainian_labor_code"] + "%";

        document.querySelector(".lang-text.p-10-gilroy-2.gold.self_employed_fop").textContent = professionData.employment_type["self_employed_fop"] + "%";
        document.querySelector(".static-line_track-wrapper-gd.self_employed_fop").style.width = professionData.employment_type["self_employed_fop"] + "%";

        document.querySelector(".lang-text.p-10-gilroy-2.gold.not_registered_salary_in_cash").textContent = professionData.employment_type["not_registered_salary_in_cash"] + "%";
        document.querySelector(".static-line_track-wrapper-gd.not_registered_salary_in_cash").style.width = professionData.employment_type["not_registered_salary_in_cash"] + "%";

        document.querySelector(".p-10-gilroy.gold.fully_remote").textContent = professionData.work_arrangement["fully_remote"] + "%";
        document.querySelector(".work-fill-gd.fully_remote").style.width = professionData.work_arrangement["fully_remote"] + "%";

        document.querySelector(".p-10-gilroy.gold.mostly_remote").textContent = professionData.work_arrangement["mostly_remote"] + "%";
        document.querySelector(".work-fill-gd.mostly_remote").style.width = professionData.work_arrangement["mostly_remote"] + "%";

        document.querySelector(".p-10-gilroy.gold.mostly_office").textContent = professionData.work_arrangement["mostly_office"] + "%";
        document.querySelector(".work-fill-gd.mostly_office").style.width = professionData.work_arrangement["mostly_office"] + "%";

        document.querySelector(".p-10-gilroy.gold.fully_office").textContent = professionData.work_arrangement["fully_office"] + "%";
        document.querySelector(".work-fill-gd.fully_office").style.width = professionData.work_arrangement["fully_office"] + "%";

        document.querySelector(".p-10-gilroy.gold.equally_remote_office").textContent = professionData.work_arrangement["equally_remote_office"] + "%";
        document.querySelector(".work-fill-gd.equally_remote_office").style.width = professionData.work_arrangement["equally_remote_office"] + "%";

        document.querySelector(".lang-text.p-10-gilroy-2.gold.ukrainian_legal_entity").textContent = professionData.contract_with["ukrainian_legal_entity"] + "%";
        document.querySelector(".lang-text.p-10-gilroy-2.gold.foreign_legal_entity").textContent = professionData.contract_with["foreign_legal_entity"] + "%";
        document.querySelector(".lang-text.p-10-gilroy-2.gold.not_registered").textContent = professionData.contract_with["not_registered_salary_in_cash"] + "%";

        document.querySelector(".contact-line_track-wrapper-gd.ukrainian_legal_entity").style.width = professionData.contract_with["ukrainian_legal_entity"] + "%";
        document.querySelector(".contact-line_track-wrapper-gd.foreign_legal_entity").style.width = professionData.contract_with["foreign_legal_entity"] + "%";
        document.querySelector(".contact-line_track-wrapper-gd.not_registered_salary_in_cash").style.width = professionData.contract_with["not_registered_salary_in_cash"] + "%";


        requestAnimationFrame(() => {
            const keys = ["pc_laptop", "playstation", "xbox", "smartphone_tablet", "multiple_platforms"];

            keys.forEach(key => {
                const fillEl = document.querySelector(`.game-fill-gd.${key}`);
                const textEl = document.querySelector(`.p-13_gilroy-gd.gold.${key}`);

                console.log(`🔍 Перевірка платформи: ${key}`);
                if (!fillEl) {
                    console.warn(`❌ Не знайдено .game-fill-gd.${key}`);
                    return;
                }

                const percent = professionData.gaming_platforms[key];
                if (textEl) {
                    textEl.textContent = percent + "%";
                }

                const cssHeight = parseFloat(getComputedStyle(fillEl).height);

                console.log(`📏 Висота з getComputedStyle: ${cssHeight}px`);

                if (cssHeight === 0) {
                    console.warn(`⚠️ CSS height = 0 для .game-fill-gd.${key}. Елемент може бути прихований.`);
                    return;
                }

                const pixelHeight = (cssHeight * percent) / 100;
                console.log(`📐 Обчислено висоту: ${pixelHeight}px (${percent}%)`);

                fillEl.style.height = pixelHeight + "px";
            });
        });





        console.log("✅ Оновлено всі дані персонажа:", professionData);


        initFinanceTabs();
        initFamilyTabs();
        initChildrenTabs();
        initEngineRangeSelector();
        handleEngineBlockVisibility();
        initProgrammingLanguageSelection();
        toggleLanguageBlockVisibility();
        initLangFactBlock();
        resetNavigationProgress();
        initGamingHabits()
        initGamingPlatformSelection();
        initBonusSelection();
        initOvertimeSelection();
        initRevisionSelection();
        initSalarySatisfactionSelector();
        initEmploymentSelection();
        initWorkArrangementSelection();
        initContractSelection();
        renderBosses();


        initRangeGd({
            salery: {
                min: professionData.salary.lowest,
                mid: professionData.salary.median,
                max: professionData.salary.highest
            },
            age: {
                min: professionData.age.youngest,
                mid: professionData.age.median,
                max: professionData.age.oldest
            },
            hour: {
                min: 1,
                mid: 2,
                max: 3
            },
            age_it: {
                min: professionData.it_entry_age.youngest,
                mid: professionData.it_entry_age.median,
                max: professionData.it_entry_age.oldest
            },

            title: {
                min: 1,
                mid1: 2,
                mid2: 3,
                max: 4
            },
            satisfaction:{
                min: 1,
                mid: 2,
                max: 3
            }

        });

        updateExpTopLines({
            exp_it: {
                line_1_point_1: professionData.it_experience["1-2_years"].toString() + "%",
                line_1_point_2: professionData.it_experience["3-5_years"].toString() + "%",
                line_2_point_1: professionData.it_experience["3-5_years"].toString() + "%",
                line_2_point_2: professionData.it_experience["6-9_years"].toString() + "%",
                line_3_point_1: professionData.it_experience["6-9_years"].toString() + "%",
                line_3_point_2: professionData.it_experience["10+_years"].toString() + "%"
            },
            exp_spec: {
                line_1_point_1: professionData.specialty_experience["1-2_years"].toString() + "%",
                line_1_point_2: professionData.specialty_experience["3-5_years"].toString() + "%",
                line_2_point_1: professionData.specialty_experience["3-5_years"].toString() + "%",
                line_2_point_2: professionData.specialty_experience["6-9_years"].toString() + "%",
                line_3_point_1: professionData.specialty_experience["6-9_years"].toString() + "%",
                line_3_point_2: professionData.specialty_experience["10+_years"].toString() + "%"
            }
        });

    }

// присвоєння артефактів зарплати

    function assignSalaryArtefact(salary, min, mid, max) {
        let artefactKey = "";

        if (salary < mid) {
            artefactKey = salary < (min + mid) / 2 ? "lowest" : "median";
        } else {
            artefactKey = salary < (mid + max) / 2 ? "median" : "highest";
        }

        if (!userData.artefacts) {
            userData.artefacts = {};
        }

        if (professionsData.artefacts && professionsData.artefacts.salary) {
            let artefactUrl = professionsData.artefacts.salary[artefactKey];

            if (artefactUrl) {
                if (userData.artefacts.salaryArtefact !== artefactUrl) {
                    userData.artefacts.salaryArtefact = artefactUrl;
                    updateProfileBlocks();
                }
                console.log(`🎖 Призначено артефакт: ${artefactKey}, URL: ${artefactUrl}`);
            }
        }
    }


// add boss points
    function addBossPoints(bossName, points, reason) {
        if (!bossesData[bossName]) return;

        if (!bossesData[bossName][reason]) {
            bossesData[bossName][reason] = 0;
        }

        bossesData[bossName][reason] = points;

        console.log(`🔥 ${bossName} отримав ${points} бал(ів) за ${reason}`);
        updateTotalBossPoints();
    }


// total boos points
    function updateTotalBossPoints() {
        Object.keys(bossesData).forEach(boss => {
            let total = 0;

            total = parseInt(bossesData[boss].points) || 0;

            Object.keys(bossesData[boss]).forEach(key => {
                if (!["name", "description", "img", "damage", "points", "totalPoints"].includes(key)) {
                    total += bossesData[boss][key];
                }
            });

            bossesData[boss].totalPoints = total;
        });

        console.log("📊 Оновлено загальні бали босів:", bossesData);
    }


// Функція вибору фінансового статусу користувача
    function initFinanceTabs() {
        const financeTabs = document.querySelectorAll(".finances-tab-gd.finance");
        const financeBlocks = document.querySelectorAll(".static-line_block-gd.finance");

        financeTabs.forEach((tab, index) => {
            tab.addEventListener("click", function () {
                financeTabs.forEach(item => item.classList.remove("active"));
                financeBlocks.forEach(block => block.classList.remove("active"));


                tab.classList.add("active");
                financeBlocks[index].classList.add("active");

                switch (index) {
                    case 0:
                        userData.finStatus = "spend_more_than_earn";
                        break;
                    case 1:
                        userData.finStatus = "spend_equal_to_earn";
                        break;
                    case 2:
                        userData.finStatus = "spend_less_than_earn";
                        break;
                }

                console.log("💰 Вибрано фінансовий статус:", userData.finStatus);
            });
        });
    }


    function initFamilyTabs() {
        const familyTabs = document.querySelectorAll(".finances-tab-gd.family");
        const familyBlocks = document.querySelectorAll(".static-gorizontal_fill-gd.family");

        familyTabs.forEach((tab, index) => {
            tab.addEventListener("click", function () {
                familyTabs.forEach(item => item.classList.remove("active"));
                familyBlocks.forEach(block => block.classList.remove("active"));

                tab.classList.add("active");
                familyBlocks[index].classList.add("active");

                let familyStatus = "";

                if (index === 0) {
                    familyStatus = "single";
                } else if (index === 1) {
                    familyStatus = "in_relationship";
                } else if (index === 2) {
                    familyStatus = "married";
                } else if (index === 3) {
                    familyStatus = "cohabiting";
                } else {
                    console.error("Невідомий індекс сімейного статусу:", index);
                    return;
                }

                userData.family = familyStatus;
                console.log("👨‍👩‍👦 Вибрано сімейний статус:", familyStatus);

                if (typeof assignFamilyArtefact === "function") {
                    assignFamilyArtefact(familyStatus);
                } else {
                    console.error("Функція assignFamilyArtefact не знайдена!");
                }
            });
        });
    }


    function assignFamilyArtefact(familyStatus) {
        if (!userData.artefacts) {
            userData.artefacts = {};
        }

        if (professionsData.artefacts && professionsData.artefacts.marital_status) {
            let artefactUrl = professionsData.artefacts.marital_status[familyStatus];

            if (artefactUrl) {
                if (userData.artefacts.familyArtefact !== artefactUrl) {
                    userData.artefacts.familyArtefact = artefactUrl;
                    updateProfileBlocks();
                }
                console.log(`💍 Призначено артефакт сімейного стану: ${familyStatus}, URL: ${artefactUrl}`);
            }
        }
    }

    function initChildrenTabs() {
        document.querySelectorAll(".finances-block-gd.children").forEach(childrenBlock => {
            const childrenTabs = childrenBlock.querySelectorAll(".finances-tab-gd.children");
            const childrenBlocks = childrenBlock.querySelectorAll(".static-line_block-gd.children");

            console.log("🔍 Виявлені вкладки дітей:", document.querySelectorAll(".finances-tab-gd.children"));

            childrenTabs.forEach((tab, index) => {
                console.log("🎯 Додаємо обробник для:", tab);

                tab.addEventListener("click", function () {
                    console.log("✅ Клік спрацював по вкладці дітей:", tab.textContent);
                    childrenTabs.forEach(item => item.classList.remove("active"));
                    childrenBlocks.forEach(block => block.classList.remove("active"));

                    tab.classList.add("active");
                    childrenBlocks[index].classList.add("active");

                    let childrenStatus = index === 0 ? "have_children" : "no_children";
                    userData.kids = childrenStatus;
                    console.log("👶 Вибрано статус дітей:", childrenStatus);

                    // Призначаємо артефакт для вибору
                    assignChildrenArtefact(childrenStatus);
                });
            });
        });
    }


    function assignChildrenArtefact(childrenStatus) {
        if (!userData.artefacts) {
            userData.artefacts = {};
        }
        if (!userData.kids) return;

        if (professionsData.artefacts && professionsData.artefacts.children) {
            let artefactUrl = professionsData.artefacts.children[userData.kids];

            if (artefactUrl) {
                if (userData.artefacts.childrenArtefact !== artefactUrl) {
                    userData.artefacts.childrenArtefact = artefactUrl;
                    updateProfileBlocks();
                }
                console.log(`🍼 Призначено артефакт для дітей: ${childrenStatus}, URL: ${artefactUrl}`);
            }
        }
    }


    document.querySelector(".exp-flex-gd.exp_it").addEventListener("click", function (event) {
        const allColumns = document.querySelectorAll(".exp-colum_wrapper-gd");

        allColumns.forEach(column => {
            const rect = column.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const topY = rect.top;
            const clickX = event.clientX;
            const clickY = event.clientY;

            const distance = Math.sqrt(Math.pow(clickX - centerX, 2) + Math.pow(clickY - topY, 2));
            const vwToPx = window.innerWidth * 0.03;

            if (distance < vwToPx) {
                document.querySelectorAll(".range-thumb-gd.exp-trumb.exp_it").forEach(thumb => {
                    thumb.style.opacity = "0";
                });

                const classList = Array.from(column.classList);
                const selectedComboClass = classList.find(cls => cls.startsWith("exp-it-line-"));

                if (selectedComboClass) {
                    console.log("✅ Вибрано:", selectedComboClass);
                    userData.itExperience = selectedComboClass;

                    const thumb = column.querySelector(".range-thumb-gd.exp-trumb.exp_it");
                    if (thumb) {
                        thumb.style.opacity = "1";
                    }
                }

                if (professionsData.artefacts && professionsData.artefacts.it_experience) {
                    let expKey = selectedComboClass.replace("exp-it-line-", "") + "_years";

                    if (selectedComboClass === "exp-it-line-10") {
                        expKey = "10+_years";
                    }

                    let artefactUrl = professionsData.artefacts.it_experience[expKey];

                    if (artefactUrl) {
                        if (!userData.artefacts) {
                            userData.artefacts = {};
                        }

                        userData.artefacts["exp-it"] = artefactUrl;
                        console.log(`🖥 Призначено артефакт за ІТ досвід: ${expKey}, URL: ${artefactUrl}`);

                        updateProfileBlocks();
                    } else {
                        console.warn(`⚠️ Не знайдено артефакт для: ${expKey}`);
                    }
                } else {
                    console.error("❌ Дані про артефакти IT досвіду відсутні!");
                }
            }
        });
    });


    document.querySelector(".exp-flex-gd.exp_spec").addEventListener("click", function (event) {
        const allColumns = document.querySelectorAll(".exp-colum_wrapper-gd");

        allColumns.forEach(column => {
            const rect = column.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const topY = rect.top;
            const clickX = event.clientX;
            const clickY = event.clientY;

            const distance = Math.sqrt(Math.pow(clickX - centerX, 2) + Math.pow(clickY - topY, 2));
            const vwToPx = window.innerWidth * 0.03;

            if (distance < vwToPx) {
                document.querySelectorAll(".range-thumb-gd.exp-trumb.exp_spec").forEach(thumb => {
                    thumb.style.opacity = "0";
                });

                const classList = Array.from(column.classList);
                const selectedComboClass = classList.find(cls => cls.startsWith("exp-spec-line-"));

                if (selectedComboClass) {
                    console.log("✅ Вибрано:", selectedComboClass);
                    userData.specialtyExperience = selectedComboClass;

                    const thumb = column.querySelector(".range-thumb-gd.exp-trumb.exp_spec");
                    if (thumb) {
                        thumb.style.opacity = "1";
                    }

                    addUserPoints("specialtyExperience", 0);

                    let points = 0;
                    switch (selectedComboClass) {
                        case "exp-spec-line-1-2":
                            points = 1;
                            break;
                        case "exp-spec-line-3-5":
                            points = 2;
                            break;
                        case "exp-spec-line-6-9":
                            points = 3;
                            break;
                        case "exp-spec-line-10":
                            points = 4;
                            break;
                    }
                    addUserPoints("specialtyExperience", points);
                }
            }
        });
    });

    const track = document.querySelector(".title-truck_gd");
    const thumb = document.querySelector(".title-trumb-gd");
    const titleBlocks = document.querySelectorAll(".title-block_item-gd-2");

    let isDragging = false;
    let positions = [0, 33, 66, 98];
    let selectedIndex = null;

    function setActiveTitle(index) {
        titleBlocks.forEach(block => block.classList.remove("active"));

        if (index !== null) {
            titleBlocks[index].classList.add("active");

            let jobTitle = ["junior", "middle", "senior", "team_tech_lead"][index];
            let points = index + 1;

            addUserPoints("titlePoints", points);
            console.log(`📌 Вибрано: ${jobTitle} (Бали: ${points})`);
            userData.jobTitle = jobTitle;

            moveThumb(positions[index]);
        }
    }

    function moveThumb(value) {
        thumb.style.left = `${value}%`;
    }

    function startDrag(event) {
        isDragging = true;
        event.preventDefault();
    }

    function stopDrag() {
        if (!isDragging) return;
        isDragging = false;

        let rect = track.getBoundingClientRect();
        let x = ((thumb.getBoundingClientRect().left - rect.left) / rect.width) * 100;

        let closestIndex = positions.reduce((prev, curr, idx) =>
            Math.abs(curr - x) < Math.abs(positions[prev] - x) ? idx : prev, 0
        );

        // ✅ Оновлюємо selectedIndex кожен раз, а не тільки при першому русі
        selectedIndex = closestIndex;
        setActiveTitle(closestIndex);
    }

    function dragMove(event) {
        if (!isDragging) return;

        let clientX = event.touches ? event.touches[0].clientX : event.clientX;
        let rect = track.getBoundingClientRect();
        let x = ((clientX - rect.left) / rect.width) * 100;
        x = Math.max(0, Math.min(x, 98));

        moveThumb(x);
    }

// Додаємо обробники подій
    thumb.addEventListener("mousedown", startDrag);
    thumb.addEventListener("touchstart", startDrag, { passive: false });
    document.addEventListener("mousemove", dragMove);
    document.addEventListener("touchmove", dragMove, { passive: false });
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);


    // ======== Вибір рівня англійської мови ======== //
    function initLanguageSelection() {
        const langContainers = document.querySelectorAll(".lang-row_wrapper-gd.lang");
        const allLangButtons = document.querySelectorAll(".finances-tab-gd-2");
        const allLangTextWrappers = document.querySelectorAll(".static-text_wrapper-gd-2");

        langContainers.forEach(langContainer => {
            const langButtons = langContainer.querySelectorAll(".finances-tab-gd-2");

            langButtons.forEach(langButton => {
                langButton.addEventListener("click", function () {
                    // Видаляємо `active` у всіх кнопок та текстових блоків перед додаванням нового активного
                    allLangButtons.forEach(btn => btn.classList.remove("active"));
                    allLangTextWrappers.forEach(txt => txt.classList.remove("active"));

                    let selectedLevel = "";
                    let points = 0;

                    if (langButton.classList.contains("pre-intermediate-btn")) {
                        selectedLevel = "pre-intermediate";
                        points = 1;
                    } else if (langButton.classList.contains("intermediate-btn")) {
                        selectedLevel = "intermediate";
                        points = 2;
                    } else if (langButton.classList.contains("upper-intermediate-btn")) {
                        selectedLevel = "upper-intermediate";
                        points = 3;
                    } else if (langButton.classList.contains("advanced-btn")) {
                        selectedLevel = "advanced";
                        points = 4;
                    }

                    // ✅ Додаємо `active` тільки для вибраного рівня
                    langButton.classList.add("active");
                    const selectedTextWrapper = langContainer.querySelector(".static-text_wrapper-gd-2");
                    if (selectedTextWrapper) selectedTextWrapper.classList.add("active");

                    // ✅ Оновлення балів
                    addUserPoints("langPoints", points);
                    console.log(`✅ Вибрано рівень: ${selectedLevel}, Бали: ${points}`);
                });
            });
        });

        console.log("✅ Логіка вибору рівня англійської ініціалізована");
    }

    console.log('v-1')

    initLanguageSelection();



    function handleEngineBlockVisibility() {
        const engineBlock = document.querySelector(".title-block-gd.engines");
        if (!engineBlock) return;

        const hiddenProfessions = ["Marketing", "HR"];
        if (hiddenProfessions.includes(userData.profession)) {
            engineBlock.style.display = "none";
        } else {
            engineBlock.style.display = "block";
        }
    }

    function initEngineRangeSelector() {
        const track = document.querySelector(".title-truck_gd.engines");
        const thumb = track?.querySelector(".title-trumb-gd");
        const engineBlocks = document.querySelectorAll(".title-block_item-gd");

        if (!track || !thumb || engineBlocks.length === 0) {
            console.error("❌ Блоки або елементи для вибору рушія не знайдені.");
            return;
        }

        const positions = [0, 33, 66, 98];
        const engineKeys = ["unity", "unreal_engine", "no_engine", "other_engine"];
        let isDragging = false;
        let selectedIndex = null;

        function moveThumb(value) {
            thumb.style.left = `${value}%`;
        }

        function setActiveEngine(index) {
            engineBlocks.forEach(block => block.classList.remove("active"));
            if (index !== null) {
                engineBlocks[index].classList.add("active");

                const engineKey = engineKeys[index];
                userData.engineExperience = engineKey;

                // призначення артефакта
                const artefactUrl = professionsData.artefacts?.engine_experience?.[engineKey];
                if (artefactUrl) {
                    userData.artefacts.engineExperience = artefactUrl;
                    updateProfileBlocks();
                    console.log(`🧩 Призначено артефакт рушія: ${engineKey}, URL: ${artefactUrl}`);
                }

                moveThumb(positions[index]);
            }
        }

        function startDrag(e) {
            isDragging = true;
            e.preventDefault();
        }

        function stopDrag() {
            if (!isDragging) return;
            isDragging = false;

            const rect = track.getBoundingClientRect();
            const thumbX = thumb.getBoundingClientRect().left - rect.left;
            const thumbPercent = (thumbX / rect.width) * 100;

            let closestIndex = positions.reduce((prev, curr, idx) =>
                Math.abs(curr - thumbPercent) < Math.abs(positions[prev] - thumbPercent) ? idx : prev, 0
            );

            selectedIndex = closestIndex;
            setActiveEngine(selectedIndex);
        }

        function dragMove(e) {
            if (!isDragging) return;

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const rect = track.getBoundingClientRect();
            let x = ((clientX - rect.left) / rect.width) * 100;
            x = Math.max(0, Math.min(x, 98));

            moveThumb(x);
        }

        thumb.addEventListener("mousedown", startDrag);
        thumb.addEventListener("touchstart", startDrag, { passive: false });
        document.addEventListener("mousemove", dragMove);
        document.addEventListener("touchmove", dragMove, { passive: false });
        document.addEventListener("mouseup", stopDrag);
        document.addEventListener("touchend", stopDrag);
    }

    function toggleLanguageBlockVisibility() {
        const langBlock = document.querySelector(".three-part_right-gd.language");
        if (!langBlock) return;

        if (userData.profession === "Software Engineer") {
            langBlock.style.display = "block";
        } else {
            langBlock.style.display = "none";
        }
    }


    function initProgrammingLanguageSelection() {
        const tabs = document.querySelectorAll(".finances-tab-gd-2.language");
        const thumbs = document.querySelectorAll(".trumb-gold-gd");

        // Очистити активні класи
        function resetAllLangSelections() {
            tabs.forEach(tab => tab.classList.remove("active"));
            thumbs.forEach(thumb => thumb.style.opacity = "0");
        }

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const langLabel = tab.textContent.trim().toLowerCase();

                // Мапа для відповідності ключів
                const labelToKey = {
                    "c#": "csharp_dotnet",
                    "java": "java",
                    "python": "python",
                    "c++": "cpp",
                    "javascript": "javascript",
                    "typescript": "typescript",
                    "інша": "other"
                };

                const key = labelToKey[langLabel];
                if (!key) {
                    console.warn("⚠️ Невідоме значення мови:", langLabel);
                    return;
                }

                const fillKey = key === "cpp" ? "c" : key === "other" ? "other_languages" : key;

                resetAllLangSelections();

                tab.classList.add("active");

                // Показати відповідний thumb
                const thumbEl = document.querySelector(`.trumb-gold-gd.${fillKey}`) ||
                    document.querySelector(`.programming-fill-gd.${fillKey} .trumb-gold-gd`);
                if (thumbEl) thumbEl.style.opacity = "1";

                // Призначити користувачу вибір
                userData.primaryLanguage = key;

                const artefactUrl = professionsData?.artefacts?.programming_language?.[key];
                if (artefactUrl) {
                    userData.artefacts.programmingLanguage = artefactUrl;
                    updateProfileBlocks();
                    console.log(`👨‍💻 Обрана мова: ${key}, Артефакт: ${artefactUrl}`);
                }
            });
        });
    }

    function initSettlementSelection() {
        const settlementItems = document.querySelectorAll(".settlement-item-gd");

        settlementItems.forEach(item => {
            item.addEventListener("click", function () {
                // Зняти активні класи з усіх блоків і зображень
                settlementItems.forEach(i => {
                    i.classList.remove("active");
                    const img = i.querySelector(".settlement-img-gd");
                    if (img) img.classList.remove("active");
                });

                // Додати active до вибраного блоку
                item.classList.add("active");

                const currentImg = item.querySelector(".settlement-img-gd");
                if (currentImg) currentImg.classList.add("active");

                let selectedSettlement = "";
                let points = 0;

                if (item.classList.contains("big_city")) {
                    selectedSettlement = "big_city";
                    points = 2;
                } else if (item.classList.contains("small_city")) {
                    selectedSettlement = "small_city";
                    points = 1;
                } else if (item.classList.contains("rural_area")) {
                    selectedSettlement = "rural_area";
                    points = 2;
                }

                addUserPoints("settlementPoints", points);
                console.log(`✅ Вибрано тип населеного пункту: ${selectedSettlement}, Бали: ${points}`);
            });
        });

        console.log("✅ Логіка вибору типу населеного пункту ініціалізована");
    }

    initSettlementSelection();

    function initLangFactBlock() {
        const langFactBlock = document.querySelector(".fact-block-gd.lang-fact");

        if (userData.gender === "female") {
            if (langFactBlock) {
                langFactBlock.style.display='none';
                console.log("🚫 Блок з фактом про англійську приховано для female");
            }
        }

    }

    function initNavigationButtons() {
        const navButtons = document.querySelectorAll(".nav-btn-gd");
        const bossesButton = document.querySelector(".nav-btn-gd.is--bosses");
        const bossesPopupText = document.querySelector(".btn-popap-gd.is--bosses .p-16-gd");
        const mapSection = document.querySelector(".map-section-gd");

        const sectionMap = {
            "is--taverna": document.querySelector(".tavern-section-gd"),
            "is--skarbnitsia": document.querySelector(".treasury-section-gd"),
            "is--port": document.querySelector(".port-section-gd"),
            "is--bosses": document.querySelector(".boses-section-gd")
        };


        // 🟢 Клік по кнопках
        navButtons.forEach(button => {
            button.addEventListener("click", () => {
                const btnClass = Array.from(button.classList).find(cls =>
                    ["is--taverna", "is--skarbnitsia", "is--port", "is--bosses"].includes(cls)
                );
                if (!btnClass) return;

                // ❌ Блокуємо клік для .disable кнопок
                if (button.classList.contains("disable")) return;

                // 🔄 Переходи між секціями
                if (mapSection) {
                    mapSection.classList.remove("visible");
                    setTimeout(() => {
                        mapSection.style.display = "none";

                        const targetSection = sectionMap[btnClass];
                        if (targetSection) {

                            if (userData.points?.total >= 15 && bossesData?.Burnout) {
                                bossesData.Burnout.damage = 3;
                                console.log("🔥 Вигорання стає сильнішим! Damage = 3");
                            }

                            if (Object.keys(userData.artefacts || {}).length >= 7 && !userData.points.artefactBonusePoints) {
                                addUserPoints("artefactBonusePoints", 1);
                                console.log("🧩 Бонус за артефакти нараховано: +1 бал");
                            }
                            checkIfUserIsReady();
                            targetSection.style.display = "block";

                            console.log(userData);
                            setTimeout(() => targetSection.classList.add("visible"), 0);
                        }
                    }, 0);
                }

                // ✅ Відмічаємо, що користувач натиснув на одну з трьох потрібних кнопок
                if (["is--taverna", "is--skarbnitsia", "is--port"].includes(btnClass)) {
                    visited.add(btnClass);

                    // 🔓 Якщо всі натиснуті – розблоковуємо кнопку 'Боси'
                    if (
                        visited.has("is--taverna") &&
                        visited.has("is--skarbnitsia") &&
                        visited.has("is--port")
                    ) {
                        bossesButton.classList.remove("disable");
                        if (bossesPopupText) {
                            bossesPopupText.textContent = "Зустрінься з жахами геймдеву!";
                        }
                        console.log("🔥 'Боси' активовано");
                    }
                }
            });
        });

        console.log("✅ Кнопки та попапи ініціалізовано");
    }

    initNavigationButtons()

// 🔄 Функція для скидання стану
    function resetNavigationProgress() {
        visited.clear();

        const bossesButton = document.querySelector(".nav-btn-gd.is--bosses");
        const bossesPopupText = document.querySelector(".btn-popap-gd.is--bosses .p-16-gd");

        if (bossesButton && !bossesButton.classList.contains("disable")) {
            bossesButton.classList.add("disable");
        }

        if (bossesPopupText) {
            bossesPopupText.textContent = "Ти не готовий до цієї битви. Спочатку досліди решту локацій!";
        }

        console.log("🔁 Навігаційні кліки скинуто, 'Боси' знову заблоковано");
    }

    function initGamingHabits() {
        const playButtons = document.querySelectorAll(".play-button-gd");

        playButtons.forEach(button => {
            button.addEventListener("click", () => {

                playButtons.forEach(btn => btn.classList.remove("active"));

                button.classList.add("active");

                let points = 0;
                let answer = "";

                if (button.classList.contains("btn-yes-gd")) {
                    points = 1;
                    answer = "yes";
                } else if (button.classList.contains("btn-no-gd")) {
                    points = 0;
                    answer = "no";
                }

                userData.gamingHabits = answer;
                addUserPoints("gamingHabitsPoints", points);

                console.log(`🎮 Вибір ігор: ${answer}, Бали: ${points}`);
            });
        });

        console.log("✅ Логіка вибору ігрових звичок ініціалізована");
    }

    function initGamingPlatformSelection() {
        const platformBlocks = document.querySelectorAll(".game-block-gd");

        platformBlocks.forEach(block => {
            block.addEventListener("click", () => {
                // Очистити всі активні стани
                platformBlocks.forEach(item => {
                    const iconChecked = item.querySelector(".game-icon-gd.checked");
                    const track = item.querySelector(".game-track-gd");

                    if (iconChecked) iconChecked.style.opacity = "0";
                    if (track) track.style.background = "transparent";
                });

                // Активувати поточний блок
                const checkedIcon = block.querySelector(".game-icon-gd.checked");
                const track = block.querySelector(".game-track-gd");

                if (checkedIcon) checkedIcon.style.opacity = "1";
                if (track) track.style.background = "#FFD7A2";

                // Зберегти вибір
                const classList = Array.from(block.classList);
                const selectedClass = classList.find(cls =>
                    ["pc_laptop", "xbox", "playstation", "smartphone_tablet", "multiple_platforms"].includes(cls)
                );

                if (selectedClass) {
                    userData.gamingPlatform = selectedClass;
                    console.log(`🎮 Вибрано платформу: ${selectedClass}`);
                }
            });
        });

        console.log("✅ Логіка вибору платформи ігор ініціалізована");
    }
    function initBonusSelection() {
        const bonusTabs = document.querySelectorAll(".finances-tab-gd-2.white.bonus");

        bonusTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const selectedText = tab.textContent.trim().toLowerCase();

                // Мапа для відповідності ключів
                const labelToKey = {
                    "отримую": "receive",
                    "не отримую": "do_not_receive",
                    "отримував раніше": "received_before"
                };

                const key = labelToKey[selectedText];
                userData.monetary_bonuses = key;
                if (!key) {
                    console.warn("⚠️ Невідоме значення бонусу:", selectedText);
                    return;
                }

                // Очистити всі активні стани
                bonusTabs.forEach(btn => btn.classList.remove("active"));
                document.querySelectorAll(".bonus-fill-gd").forEach(el => el.classList.remove("active"));

                // Додати активний клас до вибраного
                tab.classList.add("active");

                const selectedFill = document.querySelector(`.bonus-fill-gd.${key}`);
                if (selectedFill) {
                    selectedFill.classList.add("active");
                }

                // Призначити артефакт
                const artefactUrl = professionsData?.artefacts?.monetary_bonuses?.[key];
                if (artefactUrl) {
                    userData.artefacts.bonusesArtefact = artefactUrl;
                    updateProfileBlocks();
                    console.log(`💸 Обраний бонус: ${key}, Артефакт: ${artefactUrl}`);
                } else {
                    console.warn(`❌ Артефакт не знайдено для: ${key}`);
                }
            });
        });

        console.log("✅ Логіка вибору бонусів ініціалізована");
    }



    function initOvertimeSelection() {
        const tabs = document.querySelectorAll(".finances-tab-gd-2.overtime");
        const allThumbs = document.querySelectorAll(".trumb-gold-gd.overtime");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                // Очистити всі класи
                tabs.forEach(t => t.classList.remove("active"));
                allThumbs.forEach(th => th.style.opacity = "0");

                tab.classList.add("active");

                const value = tab.textContent.trim().toLowerCase();
                let key = "";
                let points = 0;
                let bossPoints = {
                    Deadline: 0,
                    Overtime: 0,
                    Burnout: 0
                };

                Object.keys(bossesData).forEach(boss => {
                    delete bossesData[boss].overtimePoints;
                });

                switch (value) {
                    case "оплачує повністю":
                        key = "fully_paid";
                        points = 1;
                        bossPoints.Overtime = 1;
                        bossPoints.Burnout = 1;
                        break;
                    case "оплачує частково":
                        key = "partially_paid";
                        points = 1;
                        bossPoints.Overtime = 1;
                        bossPoints.Burnout = 1;
                        break;
                    case "не оплачує":
                        key = "not_paid";
                        points = 1;
                        bossPoints.Overtime = 1;
                        bossPoints.Burnout = 1;
                        break;
                    case "не овертаймлять":
                        key = "no_overtime";
                        points = 0;
                        bossPoints.Deadline = 1;
                        break;
                    case "фріланс":
                        key = "freelance";
                        points = 0;
                        bossPoints.Deadline = 1;
                        break;
                }

                userData.overtime_payment = key;

                // Додаємо клас active для вибраного треку
                const selectedTrack = document.querySelector(`.programming-fill-gd.${key}`);
                if (selectedTrack) {
                    allThumbs.forEach(th => th.style.opacity = "0"); // прибрати з усіх
                    const thumb = selectedTrack.querySelector(".trumb-gold-gd");
                    if (thumb) thumb.style.opacity = "1";
                }

                // Нараховуємо бали
                addUserPoints("overtimePoints", points);
                if (bossPoints.Overtime) addBossPoints("Overtime", bossPoints.Overtime, "overtimePoints");
                if (bossPoints.Burnout) addBossPoints("Burnout", bossPoints.Burnout, "overtimePoints");
                if (bossPoints.Deadline) addBossPoints("Deadline", bossPoints.Deadline, "overtimePoints");

                console.log(`🕒 Обрано: ${key}, Бали користувача: ${points}`, bossPoints);
            });
        });

        console.log("✅ Логіка вибору овертаймів ініціалізована");
    }


    function initRevisionSelection() {
        const tabButtons = document.querySelectorAll(".finances-tab-gd-2.revision");

        tabButtons.forEach(tab => {
            tab.addEventListener("click", () => {
                // Зняти активні класи з усіх табів і іконок
                tabButtons.forEach(btn => btn.classList.remove("active"));
                document.querySelectorAll(".revision-fill_icon-active-gd").forEach(icon => {
                    icon.classList.remove("active");
                });

                // Показати всі лінії по замовчуванню
                document.querySelectorAll(".revision-line-gd").forEach(line => {
                    line.style.display = "block";
                });

                // Активний таб
                tab.classList.add("active");

                // Отримуємо відповідний wrapper
                const wrapper = tab.closest(".revision-wrapper-gd");
                if (!wrapper) return;

                // Активна лінія — показуємо
                const lineIcon = wrapper.querySelector(".revision-fill_icon-active-gd");
                if (lineIcon) {
                    lineIcon.classList.add("active");
                }

                // Сховати revision-line-gd у цьому блоці
                const lineToHide = wrapper.querySelector(".revision-line-gd");
                if (lineToHide) {
                    lineToHide.style.display = "none";
                }

                // Лог вибору
                const selectedText = tab.textContent.trim();
                userData.salary_review_last_6_months = key;
                console.log(`📝 Вибрано опцію перегляду зарплати: ${selectedText}`);
            });
        });

        console.log("✅ Логіка вибору перегляду зарплати ініціалізована");
    }


    function initSalarySatisfactionSelector() {
        const track = document.querySelector(".title-truck_gd.satisfaction");
        const thumb = track?.querySelector(".title-trumb-gd");
        const blocks = document.querySelectorAll(".title-block_item-gd.satisfaction");

        if (!track || !thumb || blocks.length === 0) {
            console.error("❌ Блоки для вибору задоволеності не знайдені.");
            return;
        }

        const positions = [0, 49, 98]; // для 3-х блоків
        const keys = ["satisfied", "mostly_satisfied", "not_satisfied"];
        let isDragging = false;
        let selectedIndex = null;

        function moveThumb(value) {
            thumb.style.left = `${value}%`;
        }

        function setActiveBlock(index) {
            blocks.forEach(b => b.classList.remove("active"));
            if (index !== null) {
                blocks[index].classList.add("active");

                const key = keys[index];
                userData.salarySatisfaction = key;

                // призначити артефакт
                const artefactUrl = professionsData.artefacts?.salary_satisfaction?.[key];
                if (artefactUrl) {
                    userData.artefacts.salarySatisfaction = artefactUrl;
                    updateProfileBlocks();
                    console.log(`💰 Обрана задоволеність: ${key}, артефакт: ${artefactUrl}`);
                }

                moveThumb(positions[index]);
            }
        }

        function startDrag(e) {
            isDragging = true;
            e.preventDefault();
        }

        function stopDrag() {
            if (!isDragging) return;
            isDragging = false;

            const rect = track.getBoundingClientRect();
            const thumbX = thumb.getBoundingClientRect().left - rect.left;
            const thumbPercent = (thumbX / rect.width) * 100;

            let closestIndex = positions.reduce((prev, curr, idx) =>
                Math.abs(curr - thumbPercent) < Math.abs(positions[prev] - thumbPercent) ? idx : prev, 0
            );

            selectedIndex = closestIndex;
            setActiveBlock(selectedIndex);
        }

        function dragMove(e) {
            if (!isDragging) return;

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const rect = track.getBoundingClientRect();
            let x = ((clientX - rect.left) / rect.width) * 100;
            x = Math.max(0, Math.min(x, 98));

            moveThumb(x);
        }

        thumb.addEventListener("mousedown", startDrag);
        thumb.addEventListener("touchstart", startDrag, { passive: false });
        document.addEventListener("mousemove", dragMove);
        document.addEventListener("touchmove", dragMove, { passive: false });
        document.addEventListener("mouseup", stopDrag);
        document.addEventListener("touchend", stopDrag);
    }

    function initEmploymentSelection() {
        const tabs = document.querySelectorAll(".finances-tab-gd-2.employment");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const value = tab.textContent.trim().toLowerCase();

                // Очистити всі активні стани
                tabs.forEach(t => t.classList.remove("active"));
                document.querySelectorAll(".employment-text_wrapper-gd-2").forEach(el => el.classList.remove("active"));
                document.querySelectorAll(".static-line_fill-gd").forEach(el => el.classList.remove("active"));

                tab.classList.add("active");

                let key = "";
                let points = 0;

                switch (value) {
                    case "гіг-контракт":
                        key = "gig_contract";
                        points = 2;
                        break;
                    case "оформлений в іншій країні, згідно з місцевим законодавством":
                        key = "foreign_contract";
                        points = 3;
                        break;
                    case "оформлений на мінімальну зарплату, залишок “в конверті”":
                        key = "minimum_salary_rest_in_cash";
                        points = 1;
                        break;
                    case "оформлений офіційно, згідно з кзпп":
                        key = "official_ukrainian_labor_code";
                        points = 4;
                        break;
                    case "у мене відкрито фоп":
                        key = "self_employed_fop";
                        points = 2;
                        break;
                    case "ніяк не оформлений, отримую зп в конверті":
                        key = "not_registered_salary_in_cash";
                        points = 0;
                        break;
                }

                const fillEl = document.querySelector(`.static-line_track-wrapper-gd.${key} .static-line_fill-gd`);
                const textWrapper = document.querySelector(`.static-line_track-wrapper-gd.${key} .employment-text_wrapper-gd-2`);

                if (fillEl) fillEl.classList.add("active");
                if (textWrapper) textWrapper.classList.add("active");

                userData.employmentType = key;
                addUserPoints("employmentPoints", points);

                console.log(`📌 Обрано тип працевлаштування: ${key}, Бали: ${points}`);
            });
        });

        console.log("✅ Логіка вибору типу працевлаштування ініціалізована");
    }



    function initWorkArrangementSelection() {
        const tabs = document.querySelectorAll(".finances-tab-gd-2.work");
        const fills = document.querySelectorAll(".work-fill-gd");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                // Зняти класи active з усіх
                tabs.forEach(t => t.classList.remove("active"));
                fills.forEach(f => f.classList.remove("active"));

                tab.classList.add("active");

                const label = tab.textContent.trim().toLowerCase();

                const labelToKey = {
                    "повністю віддалено": "fully_remote",
                    "частіше віддалено, іноді в офісі компанії": "mostly_remote",
                    "частіше в офісі іноді віддалено": "mostly_office",
                    "повністю в офісі": "fully_office",
                    "однаково часто віддалено і в офісі": "equally_remote_office"
                };

                const key = labelToKey[label];
                userData.work_arrangement = key;
                if (!key) {
                    console.warn("⚠️ Невідомий тип праці:", label);
                    return;
                }

                // Активувати відповідний fill
                const selectedFill = document.querySelector(`.work-fill-gd.${key}`);
                if (selectedFill) selectedFill.classList.add("active");

                // Присвоїти бали
                let points = 0;
                switch (key) {
                    case "fully_remote":
                    case "fully_office":
                        points = 3;
                        break;
                    case "mostly_remote":
                    case "mostly_office":
                        points = 2;
                        break;
                    case "equally_remote_office":
                        points = 1;
                        break;
                }

                addUserPoints("workArrangementPoints", points);
                console.log(`🏠 Обраний тип роботи: ${key}, Бали користувача: ${points}`);
            });
        });

        console.log("✅ Логіка вибору типу праці ініціалізована");
    }

    function initContractSelection() {
        const contractTabs = document.querySelectorAll(".finances-tab-gd-2.contract");

        contractTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                // Зняти активні класи з усіх кнопок
                contractTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");

                // Зняти active з усіх треків
                document.querySelectorAll(".contact-line_fill-gd").forEach(f => f.classList.remove("active"));
                document.querySelectorAll(".contact-text_wrapper-gd").forEach(t => t.classList.remove("active"));

                // Знайти ключ
                const value = tab.textContent.trim().toLowerCase();
                let key = "";

                if (value.includes("в україні")) key = "ukrainian_legal_entity";
                else if (value.includes("за кордоном")) key = "foreign_legal_entity";
                else if (value.includes("в конверті")) key = "not_registered_salary_in_cash";

                // Додати активні класи відповідним елементам
                const track = document.querySelector(`.contact-line_track-wrapper-gd.${key}`);
                if (track) {
                    const fill = track.querySelector(".contact-line_fill-gd");
                    const text = track.querySelector(".contact-text_wrapper-gd");

                    if (fill) fill.classList.add("active");
                    if (text) text.classList.add("active");
                }
                userData.contract_with = key;


                console.log(`📝 Обраний тип контракту: ${key}`);
            });
        });

        console.log("✅ Контрактний вибір активовано");
    }

    function renderBosses() {
        const bossWrapper = document.querySelector(".boss-wrapper-gd");
        const bossTemplate = bossWrapper.querySelector(".boss-block-gd");

        if (!bossWrapper || !bossTemplate) {
            console.error("❌ Контейнер або шаблон .boss-block-gd не знайдено");
            return;
        }

        // Очистити, лишивши тільки перший шаблон
        bossWrapper.innerHTML = "";

        Object.values(bossesData).forEach(boss => {
            const clonedBoss = bossTemplate.cloneNode(true);

            // Заповнюємо totalPoints
            const pointsEl = clonedBoss.querySelector(".boss-points-count");
            if (pointsEl) pointsEl.textContent = boss.totalPoints;

            // Задаємо ширину для .boss-fill-gd
            const fillEl = clonedBoss.querySelector(".boss-fill-gd");
            if (fillEl) fillEl.style.height = `${(boss.totalPoints * 100) / 6}%`;

            // Зображення
            const imgEl = clonedBoss.querySelector(".boss-img-gd");
            if (imgEl) imgEl.src = boss.img;

            // Назва боса
            const nameEl = clonedBoss.querySelector(".boss-name");
            if (nameEl) nameEl.textContent = boss.name;

            // Опис
            const descEl = clonedBoss.querySelector(".boss-desc-gd");
            if (descEl) descEl.textContent = boss.description;

            bossWrapper.appendChild(clonedBoss);
        });

        console.log("👹 Боси відрендерені через клонування шаблону:", bossesData);
    }

    function checkIfUserIsReady() {
        const noReadyText = document.querySelector(".p-16-gd.is-no-ready-text");
        if (!noReadyText) return;

        const clone = { ...userData };
        delete clone.gender;
        delete clone.avatar;
        delete clone.profession;

        const hasData = Object.entries(clone).some(([key, val]) => {
            if (key === "points") {
                // Ігноруємо, якщо тільки total = 0
                const keys = Object.keys(val || {});
                return keys.length > 1 || (keys.length === 1 && val.total > 0);
            }

            if (typeof val === "object") {
                return Object.keys(val).length > 0;
            }

            return val !== "" && val !== 0;
        });

        noReadyText.style.display = hasData ? "none" : "block";
    }

    function initBossSelection() {
        const bossBlocks = document.querySelectorAll(".boss-block-gd");
        const activeBtn = document.querySelector(".active-state_btn-gd");

        if (!bossBlocks.length || !activeBtn) return;

        bossBlocks.forEach(bossBlock => {
            const bossImg = bossBlock.querySelector(".boss-img-gd");
            if (!bossImg) return;

            bossImg.addEventListener("click", () => {
                // Прибрати клас `active` з усіх блоків
                bossBlocks.forEach(b => b.classList.remove("active"));

                // Додати клас `active` до вибраного блоку
                bossBlock.classList.add("active");

                // Активувати кнопку
                activeBtn.style.opacity = "1";
            });
        });
    }

    initBossSelection();


});



