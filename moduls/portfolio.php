        <section class="portfolio" id="portfolio">
            <div class="row container section-portfolio pd-left-60 pd-right-60 pd-top-bottom">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="sub-skills text-center  sub-title">Portafolio</h5>
                            <h2 class="title-skills text-center title-section">Proyectos en los que he trabajado </h2>
                            <p class="text-center">A continuación una selección de proyectos en los que he tenido el placer <br>
                                de trabajar y mi aporte en cada uno de ellos</p>
                            <div class="space"></div>
                        </div>
                    </div>
                    <div class=" row-card">
                        <div class="col-card">
                            <?php
                                foreach($portfolios as $port){ ?>
                                    <div class="cardview">
                                        <img src="img/<?php echo $port['port-img'];?>"/>
                                        <h1 class="title-port"><?php echo $port['port-title'];?></h1>
                                        <section class="content">
                                            <h1><?php echo $port['port-title'];?></h1>
                                            <p> <?php echo $port['port-text'];?></p>
                                            <a class="read-more" rel="nofollow" href="<?php echo $port['port-link'];?>">
                                                <span>Ver Sitio</span>
                                                <svg width="13px" height="10px" viewBox="0 0 13 10">
                                                    <path d="M1,5 L11,5"></path>
                                                    <polyline points="8 1 12 5 8 9"></polyline>
                                                </svg>
                                            </a>
                                        </section>
                                    </div>
                            <?php } ?>
                            
                        </div>
                    </div>
                </div>
                       
            </div>
        </section>