let userData = {
    gender: "",
    profession: "",
    avatar: "",
    points: {},
    artefacts: {},
    salary: 0,
    age: 0,
    workHours: 0,
    finStatus: "",
    family: "",
    kids: "",

};





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
        userData.salary = 0;
        userData.age = 0;
        userData.workHours = 0;
        userData.finStatus = "";
        userData.family = "";
        userData.kids = "";

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
        userData.finStatus = {...professionData.financial_status};

        console.log("✅ Оновлено всі дані персонажа:", professionData);


        initFinanceTabs();
        initFamilyTabs();
        initChildrenTabs();
        initEngineRangeSelector();
        handleEngineBlockVisibility();
        initProgrammingLanguageSelection()
        toggleLanguageBlockVisibility()

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


});



