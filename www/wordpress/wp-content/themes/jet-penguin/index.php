<?php get_header(); ?>
    <div class="c-row">
        <?php get_template_part('part/breadcrumb');?>
    </div>

    <div class="c-row">

        <div class="c-content">

            <?php if ( have_posts() ): ?>
                <?php while ( have_posts() ): ?>
                    <?php the_post();?>

                    <h1><?php the_title();?></h1>

                    <?php the_content();?>

                <?php endwhile; ?>
            <?php else: ?>
            <?php endif; ?>
        </div>
    </div>

<?php wp_footer();?>
</body>
</html>
