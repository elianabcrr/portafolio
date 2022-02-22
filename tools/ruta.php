<?php
if (($_SERVER['SERVER_NAME']=='localhost') AND ($_SERVER['SERVER_PORT']=='80')){
    define('SERVER', "http://" . $_SERVER['SERVER_NAME'] . "/portafolio/");
}

if (($_SERVER['SERVER_NAME']=='localhost') AND ($_SERVER['SERVER_PORT']=='8080')){
     define('SERVER', "http://" . $_SERVER['SERVER_NAME'] . ":8080/portafolio/");
}
// Si estas ejecutando el sitio desde un hosting
if ($_SERVER['SERVER_NAME']=='nombreDeDominio.com') {
    define('SERVER', "http://nombreDeDominio.com/");
}
// Si estas ejecutando el sitio desde una direccion ip
if ($_SERVER['SERVER_NAME']=='direccionIp') {    
    define('SERVER', "http://direccionIp/");
}

  // skills and tools
  $skills = array(
    array( 'skill-name' => 'JavaScript', 'skill-con' => '<i class="fa-brands fa-js"></i>'),
    array( 'skill-name' => 'HTML5', 'skill-con' => '<i class="fa-brands fa-html5"></i>'),
    array( 'skill-name' => 'jQuery', 'skill-con' => '<i class="fa-brands fa-js"></i>'),
    array( 'skill-name' => 'Git', 'skill-con' => '<i class="fa-brands fa-git"></i>'),
    array( 'skill-name' => 'Github', 'skill-con' => '<i class="fa-brands fa-github"></i>'),
    array( 'skill-name' => 'VS Code', 'skill-con' => '<i class="fa-brands fa-js-square"></i>'),
    array( 'skill-name' => 'Php', 'skill-con' => '<i class="fa-brands fa-php"></i>'),
    array( 'skill-name' => 'Responsive Websites', 'skill-con' => '<i class="fa-brands fa-js-square"></i>'),
    array( 'skill-name' => 'Web Accessibility', 'skill-con' => '<i class="fa-brands fa-js-square"></i>'),
    array( 'skill-name' => 'WordPress', 'skill-con' => '<i class="fa-brands fa-wordpress"></i>'),
    array( 'skill-name' => 'vuejs', 'skill-con' => '<i class="fa-brands fa-vuejs"></i>'),
    array( 'skill-name' => 'Shopify', 'skill-con' => '<i class="fa-brands fa-shopify"></i>'),
    array( 'skill-name' => 'Bootstrap', 'skill-con' => '<i class="fa-brands fa-bootstrap"></i>')
);
// portfolios
$portfolios = array(
    array( 'port-img' => 'startupoasis.png', 'port-title' => 'Startups Oasis', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://startupsoasis.com/'),
    array( 'port-img' => 'honimunn.png', 'port-title' => 'Honimunn', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://honimunn.com/'),
    array( 'port-img' => 'lafinca.png', 'port-title' => 'LaFinca', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://alquiler.lafincarealestate.com/'),
    array( 'port-img' => 'lafinca-sky-villas.png', 'port-title' => 'LaFinca Sky Villas', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://lafincarealestate.com/'),
    array( 'port-img' => 'runnics.png', 'port-title' => 'Runnics', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://www.runnics.com/'),
    array( 'port-img' => 'firpack.png', 'port-title' => 'Firpack', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://firpack.com/'),
    array( 'port-img' => 'dna-testing-miami.png', 'port-title' => 'DNA Testing Miami', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://dnatestingmiami.com/'),
    array( 'port-img' => 'hypefit.png', 'port-title', 'port-title'  => 'Hypefit', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://www.hypefit.es/'),
    array( 'port-img' => 'ofituria.png', 'port-title' => 'Ofituria', 'port-text' => 'mauris proin sed nibh magna ipsum sollicitudin urna lobortis eros in ac malesuada bibendum...', 'port-link'=>'https://ofituria.com/'),
    
);
?>