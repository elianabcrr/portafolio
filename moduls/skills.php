        <section class="skills-tools" id="skills">
            <div class="row container  pd-left-60 pd-right-60 pd-top-bottom">
                <div class="col-12">
                    <div class="row">
                        <div class="col-12">
                            <h5 class="sub-skills text-center  sub-title">SKILLS & TOOLS</h5>
                            <h2 class="title-skills text-center title-section">Lorem Ipsum is simply dummy text </h2>
                            <p class="text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s:</p>
                            <div class="space"></div>
                        </div>
                    </div>
                    <div class="row">
                    <?php
                        foreach($skills as $skill){
                        ?>
                            <div class="col">
                                <div class="card-icon">
                                    <div class="icon-c">
                                        <?php echo $skill['skill-con']; ?>
                                    </div>
                                    <p class="text"><?php echo $skill['skill-name'] ; ?></p> 
                                </div>
                            </div>
                    <?php } ?>
                    </div>
                         
                                
                </div>
            </div>
        </section> 