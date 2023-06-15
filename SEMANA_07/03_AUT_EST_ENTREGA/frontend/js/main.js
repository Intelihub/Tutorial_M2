let apiUrl = 'http://127.0.0.1:3000';

/**
 * as agreed, here we have a function that manages n carousels, currently 2, in a modularized way.
 */

function rotateSlides(direction, carousel) {
    let carouselChildrens = $(carousel).find(".carousel-item");
    let actualIndex = $(carousel).attr('data-index');
    let nextIndex = parseInt(actualIndex) + direction;
    let maxIndex = carouselChildrens.length - 1;
    if (nextIndex > maxIndex) {
        nextIndex = 0;
    } else if (nextIndex < 0) {
        nextIndex = maxIndex;
    }

    changeActualSlide(nextIndex, carousel);
}

function changeActualSlide(index, carousel) {
    let carouselChildrens = $(carousel).children('.carousel-item');
    let actualIndex = $(carousel).attr('data-index');
    $(carousel).attr('data-index', index);
    
    let actualSlide = carouselChildrens[actualIndex];
    let nextSlide = carouselChildrens[index];


    $(actualSlide).css("transition", "0.6s");
    $(actualSlide).css("margin-top", "100%");

    $(nextSlide).css("transition", "0s");
    $(nextSlide).css("margin-top", "-100%");
    window.setTimeout(() => {
        $(nextSlide).css("transition", "0.8s");
        $(nextSlide).css("margin-top", "0px");
    }, 1);        
        
}

let resumes = {
    list() {
        $.ajax({
            url: ('/get-resumes'),
            type: 'GET',
            success: data => {
                let responseHTMl = '';
                data.forEach(curriculum => {
                    responseHTMl += ' ' +
                    '<div class="container">' +
                        '<header>' +
                            `<img src="${curriculum.curriculum_photo}" class="min-w-320px" alt="Foto do currículo" />` +
                            '<article class="main-info min-w-320px">' +
                                '<section class="titles">' +
                                    `<h1>${curriculum.curriculum_name}</h1>` +
                                    `<h2>${curriculum.curriculum_job_role}</h2>` +
                                '</section>' +
                                '<section class="description">' +
                                    '<h2>Sobre mim</h2>' +
                                    `<p>${curriculum.curriculum_desc}</p>` +
                                '</section>' +
                            '</article>' +
                        '</header>' +
                        '<main>' +
                            '<div class="cols2-or-rows2">' +
                                '<article class="habilities">' +
                                    '<h2>Habilidades</h2>' +
                                    '<div class="carousel" data-index="0">';
                                        curriculum.abilities.forEach((ability) => {
                                            responseHTMl += '<section class="hability carousel-item">' +
                                                    `<h3>${ability.ability_name}</h3>` +
                                                    '<div class="hability-value flex">';
    
                                            for(let i = 0; i < ability.ability_value; i++) {
                                                responseHTMl += '<div class="number black"></div>';
                                            }
    
                                            for(let i = 0; i < (5 - ability.ability_value); i++) {
                                                responseHTMl += '<div class="number border"></div>';
                                            }
    
                                            responseHTMl += '</div>' + '</section>';
                                        });
                                        responseHTMl += ' ' +
                                    '</div>' +
                                '</article>' +
    
                                '<article class="formation-data min-w-320px">' +
                                    '<h2>Formação</h2>' +
                                    '<div class="carousel" data-index="1">';
                                        
                                        curriculum.education.forEach((item) => {
                                            responseHTMl += ' ' +
                                            '<section class="formation carousel-item">' +
                                                '<span>' +
                                                    `${item.education_begin_year} - ${item.education_end_year}` +
                                                '</span>' +
                                                '<h3>' +
                                                    `${item.education_course}` +
                                                '</h3>' +
                                                `<p>${item.education_description}</p>` +
                                            '</section>';
                                        })
    
                                    responseHTMl += ' ' +
                                    '</div>' +
                                '</article>' +
                
                            '</div>' +
                            '<div class="cols2-or-rows2">' +
                                '<article class="personalities">' +
                                    '<h2>Atributos de Personalidade</h2>' +
                                    '<div class="carousel" data-index="0">';
                                        curriculum.personality_attr.forEach((item) => {
                                            responseHTMl += ' ' +
                                            '<section class="personality carousel-item">' +
                                                `<h3>${item.attr_name}</h3>` +
                                                '<div class="personality-value flex">';
                                            for(let i = 0; i < item.attr_value; i++) {
                                                responseHTMl += '<div class="number black"></div>';
                                            }
    
                                            for(let i = 0; i < (5 - item.attr_value); i++) {
                                                responseHTMl += '<div class="number border"></div>';
                                            }
    
                                            responseHTMl += '</div>' + '</section>';
                                        });
    
                                    responseHTMl += ' ' +
                                    '</div>' +
                                '</article>' +
                                
                                '<article class="experience-data min-w-320px">' +
                                    '<h2>Experiência</h2>' +
                                    '<div class="carousel" data-index="0">';
                                        curriculum.experiences.forEach((item) => {
                                            responseHTMl += ' ' +
                                            '<section class="experience carousel-item">' +
                                                '<div class="min-info">' +
                                                    `<h3>${item.experience_company_name}</h3>` +
                                                    '<p> | ';
                                                        if (item.experience_end_year) {
                                                            responseHTMl += `<i>${item.experience_begin_year} - ${item.experience_end_year}</i> <span>| ${item.experience_job_role}</span>`;
                                                        } else {
                                                            responseHTMl += `<i>${item.experience_begin_year} - até o momento</i> <span>| ${item.experience_job_role}</span>`;
                                                        }
                                                        
                                                        responseHTMl += ' ' +
                                                    '</p>' +
                                                '</div>' +
                                                `<p>${item.experience_description}</p>` +
                                            '</section>';
                                        })
                                        responseHTMl += ' ' +
                                    '</div>' +
                                '</article>' +
                            '</div>' +
                            '<h2>Realizações</h2>' +
                            '<article class="realizations min-w-320px">';
                                curriculum.achievements.forEach((item) => {
                                    responseHTMl += ' ' +
                                    '<section class="realization">' +
                                        `<h3>${item.achievement_name}<span class="date"> | ${item.achievement_year}</span></h3>` +
                                        `<p>${item.achievement_description}</p>` +
                                    '</section>';
                                })
    
                            responseHTMl += ' ' +
                            '</article>' +
                        '</main>' +
                        
                        '<footer class="flex">' +
                            '<address>' +
                                '<h2>Contato</h2>' +
                                '<dl>' +
                                    '<div class="address">' +
                                        '<dt>Endereco: </dt>' +
                                        `<dd>${curriculum.curriculum_address}</dd>` +
                                    '</div>' +
                                    '<div class="phone">' +
                                        '<dt>Telefone: </dt>' +
                                        `<dd>${curriculum.curriculum_phone}</dd>` +
                                    '</div>' +
                                    '<div class="email">' +
                                        '<dt>Email: </dt>' +
                                        '<dd>' +
                                            `<a href="mailto:${curriculum.curriculum_email}">${curriculum.curriculum_email}</a>` +
                                        '</dd>' +
                                    '</div>' +
                                '</dl>' +
                            '</address>' +
                        '</footer>' +
                    '</div>'
                });
                $('#resumes').html(responseHTMl);
                $('.carousel').each((index) => {
                    let carousel = $('.carousel')[index];
                    let height = 0;
                    let carouselItemLenght = $(carousel).children('.carousel-item').length;
                    $(carousel).children('.carousel-item').each((index) => {
                        let carouselItem = $(carousel).children('.carousel-item')[index];
                        height = height + parseInt($(carouselItem).css("height"));
                    });
                    let carouselHeight = (height / carouselItemLenght) + 30;
            
                    $(carousel).css("height", (carouselHeight + "px"));
                    window.setInterval(() => {rotateSlides(1, carousel)}, 5000);
                    rotateSlides(0, $(carousel));
                });
            }
        });
    }
}

$(document).ready(function() {
    resumes.list();
});