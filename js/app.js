$(document).ready(function() {
  $('#about-link a').on('click', function() {
    // $('#projects-link a').removeClass('active')
    // $('#projectsBorderBottom').css('width', '0px')
    // $('#about-link a').addClass('active')
    // $('#aboutBorderBottom').css('width', '38px')
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 1000);
  })

  $('#projects-link a, #down').on('click', function(e) {
    // e.preventDefault()
    // $('#about-link a').removeClass('active')
    // $('#aboutBorderBottom').css('width', '0px')
    // $('#projects-link a').addClass('active')
    // $('#projectsBorderBottom').css('width', '53px')
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 1000);
  })

  $('#projects-link').hover(function() {
    $(this).html('under construction - <a href="http://github.com/ratley" target="_blank">github</a>')
    $(this).css('transition', 'color .2s ease')
    $(this).css('color', 'gold')
  })
  $(this).css('color', 'gold')
  $(document).on('hover','#projects-link a', function() {
    // $(this).css('cursor', 'pointer')
  })
  $('#projects-link').on('mouseleave', function() {
    $(this).text('projects')
    $(this).css('color', '#616161')
  })


  checkLocation()
})

function isIndex() {
  return !window.location.href.includes('about') && !window.location.href.includes('projects')
}

function checkLocation() {
  if ((window.location.href.indexOf("#about") > -1 || isIndex()) || $(document).scrollTop() < 600) {
    $('#projects-link a').removeClass('active')
    $('#projectsBorderBottom').css('width', '0px')
    $('#about-link a').addClass('active')
    $('#aboutBorderBottom').css('width', '38px')
  } else if(window.location.href.indexOf("#projects") > -1 && $(document).scrollTop() > 600) {
    $('#about-link a').removeClass('active')
    $('#aboutBorderBottom').css('width', '0px')
    $('#projects-link a').addClass('active')
    $('#projectsBorderBottom').css('width', '53px')
  }
}
function checkScrollPosition() {
  if($(document).scrollTop() == 0) {
    $('#projects-link a').removeClass('active')
    $('#projectsBorderBottom').css('width', '0px')
    $('#about-link a').addClass('active')
    $('#aboutBorderBottom').css('width', '38px')
  } else if($(document).scrollTop() > 300) {
    $('#about-link a').removeClass('active')
    $('#aboutBorderBottom').css('width', '0px')
    $('#projects-link a').addClass('active')
    $('#projectsBorderBottom').css('width', '53px')
  }
}
window.setInterval(checkLocation, 100)

window.setInterval(checkScrollPosition, 100)
