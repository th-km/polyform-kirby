<link rel="icon" type="image/png" sizes="32x32" href="<?= url('/favicon-32x32.png') ?>">
<link rel="icon" type="image/png" sizes="16x16" href="<?= url('/favicon-16x16.png') ?>">
<link rel="icon" type="image/x-icon" href="<?= url('/favicon.ico') ?>">

<title><?= $site->title() ?></title>
<meta name="title" content="<?= $site->title() ?>">
<meta name="description" content="<?= $site->description() ?>">

<meta property="og:type" content="website">
<meta property="og:url" content="<?= $site->website() ?>">
<meta property="og:title" content="<?= $site->title() ?>">
<meta property="og:description" content="<?= $site->description() ?>">
<meta property="og:image" content="<?= $site->image('meta.png')->url() ?>">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="<?= $site->website() ?>">
<meta property="twitter:title" content="<?= $site->title() ?>">
<meta property="twitter:description" content="<?= $site->description() ?>">
<meta property="twitter:image" content="<?= $site->image('meta.png')->url() ?>">


