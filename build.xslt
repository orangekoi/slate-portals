<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" exclude-result-prefixes="xhtml" xmlns="http://www.w3.org/1999/xhtml" xmlns:fw="http://technolutions.com/framework" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:choose>
    <xsl:when test="contains(fw:path(), '/portal/*')">
    </xsl:when>
    <xsl:otherwise>
      <html xmlns="http://www.w3.org/1999/xhtml">
        <template path="/shared/base.xslt" xmlns="http://technolutions.com/framework" />
        <head>
          <link href="/shared/build-mobile-global.css" rel="stylesheet" />
          <script src="/shared/build-mobile-global.js" />
          <script src="/dev/UAO-Menu.js" />
          <link rel="stylesheet" href="https://kit.fontawesome.com/5f922d31be.css" crossorigin="anonymous" />
          <link rel="stylesheet" href="https://use.typekit.net/ssd4pmk.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" class="cr" />
          <xsl:apply-templates select="xhtml:html/xhtml:head/node()" />
          <link href="/shared/build.css?v=20240920" rel="stylesheet" />
        </head>
        <body>
          <xsl:copy-of select="xhtml:html/xhtml:body/@*" />
          <div id="page">
            <div class="animation cr">
              <a class="skip-link cr" href="#main-content">Skip to main content</a>
              <header id="site-header" class="">
                <div class="utility-wrap">
                  <div class="utility-nav">
                    <div class="layout layout--onecol">
                      <div class="layout__region layout__region--content">
                        <div>
                          <nav aria-label="Utility" id="utility-nav">
                            <ul class="utility-nav">
                              <li class="level-1">
                                <a class="link-button check-status" href="https://admissions.cornell.edu/application-status-page">Check Application Status</a>
                              </li>
                              <li class="level-1">
                                <a href="https://admissions.cornell.edu/policies">Policies</a>
                              </li>
                              <li class="level-1">
                                <a href="https://admissions.cornell.edu/request-information">Request Information</a>
                              </li>
                              <li class="level-1">
                                <a href="https://admissions.cornell.edu/contact-us">Contact Us </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="hdr-wrap">
                  <div id="header-left" class="hdr-left">
                    <a href="https://admissions.cornell.edu">
                      <h1 class="site-name">Cornell Undergraduate Admissions</h1>
                    </a>
                  </div>
                  <div id="header-right" class="hdr-right">
                    <nav id="priority-navigation" aria-label="Priority">
                      <ul class="menu list-menu links">
                        <li class="menu-item level-1">
                          <a href="https://admissions.cornell.edu/how-to-apply" data-drupal-link-system-path="node/53">How to Apply</a>
                        </li>
                        <li class="menu-item level-1">
                          <a href="https://admissions.cornell.edu/visit-and-connect" data-drupal-link-system-path="node/54">Visit &amp; Connect</a>
                        </li>
                      </ul>
                    </nav>
                    <nav aria-label="main" id="main-navigation">
                      <button class="toggle-button toggle-main" id="main-menu-btn" aria-expanded="false" aria-haspopup="true">
                        <i class="fa-light fa-bars">
                        </i>
                        <span class="sr-only">Toggle Main</span>
                        <span class="text">Menu<span></span></span>
                      </button>
                      <div class="nav-wrap">
                        <button aria-expanded="true" id="main-menu-close" class="menu-close toggle-button toggle-close">
                          <i class="fa-light fa-xmark">
                          </i>
                          <span class="sr-only">Close Menu</span>
                        </button>
                        <div class="nav-panel hidden nav-panel-0 left-col" tabindex="-1" id="nav-panel-1" data-panel-id="1">
                          <div class="panel-wrap">
                            <h2>Enrollment</h2>
                            <ul class="menu list-menu links">
                              <li class="menu-item menu-item--expanded level-2 unit-level parent" data-panel-parent="1" data-panel-id="1-1">
                                <button aria-expanded="false" aria-haspopup="true" class="toggle-menu top-level-toggle" data-panel-target="nav-panel-1-1">Admissions</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nav-panel nav-panel-1 center-col primary-panel is-active" tabindex="-1" id="nav-panel-1-1" data-panel-id="1-1">
                          <div class="panel-wrap active">
                            <button class="toggle-menu menu-breadcrumb unit-breadcrumb" aria-label="Up one menu level" data-panel-target="nav-panel-1">Enrollment</button>
                            <h2>
                              <a href="https://www.admissions.cornell.edu" class="is-active unit-top-level active-site nav-panel-header">Admissions</a>
                            </h2>
                            <ul class="menu list-menu links site-level">
                              <li class="menu-item menu-item--expanded top-level level-3 parent" data-panel-parent="1-1" data-panel-id="1-1-1">
                                <button aria-expanded="false" aria-haspopup="true" class="toggle-menu top-level-toggle" data-panel-target="nav-panel-1-1-1">How to Apply</button>
                              </li>
                              <li class="menu-item menu-item--expanded top-level level-3 parent" data-panel-parent="1-1" data-panel-id="1-1-2">
                                <button aria-expanded="false" aria-haspopup="true" class="toggle-menu top-level-toggle" data-panel-target="nav-panel-1-1-2">Visit &amp; Connect</button>
                              </li>
                              <li class="menu-item menu-item--expanded top-level level-3 parent" data-panel-parent="1-1" data-panel-id="1-1-3">
                                <button aria-expanded="false" aria-haspopup="true" class="toggle-menu top-level-toggle" data-panel-target="nav-panel-1-1-3">Diversity at Cornell</button>
                              </li>
                              <li class="menu-item menu-item--expanded top-level level-3 parent" data-panel-parent="1-1" data-panel-id="1-1-4">
                                <button aria-expanded="false" aria-haspopup="true" class="toggle-menu top-level-toggle" data-panel-target="nav-panel-1-1-4">Academics</button>
                              </li>
                              <li class="menu-item menu-item--expanded top-level level-3 parent" data-panel-parent="1-1" data-panel-id="1-1-5">
                                <button aria-expanded="false" aria-haspopup="true" class="toggle-menu top-level-toggle" data-panel-target="nav-panel-1-1-5">Life at Cornell</button>
                              </li>
                              <li class="menu-item menu-item--expanded mobile-utility top-level level-3 parent" data-panel-parent="1-1" data-panel-id="1-1-6">
                                <button aria-expanded="false" aria-haspopup="true" class="toggle-menu top-level-toggle" data-panel-target="nav-panel-1-1-6">Important Links</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nav-panel hidden nav-panel-2 right-col" tabindex="-1" id="nav-panel-1-1-1" data-panel-id="1-1-1">
                          <div class="panel-wrap">
                            <button class="toggle-menu menu-breadcrumb" aria-label="Up one menu level" data-panel-target="nav-panel-1-1">Admissions</button>
                            <h2>
                              <a href="https://admissions.cornell.edu/how-to-apply" data-drupal-link-system-path="node/53" class="nav-panel-header">How to Apply</a>
                            </h2>
                            <ul class="menu list-menu links top-level-child">
                              <li class="menu-item level-4" data-panel-parent="1-1-1">
                                <a href="https://admissions.cornell.edu/how-to-apply" data-drupal-link-system-path="node/53">How to Apply Overview</a>
                              </li>
                              <li class="menu-item menu-item--expanded level-4 parent" data-panel-parent="1-1-1" data-panel-id="1-1-1-2">
                                <a href="https://admissions.cornell.edu/how-to-apply/first-year-applicants" data-drupal-link-system-path="node/64">First-Year Applicants</a>
                                <ul class="menu list-menu links expanded-menu">
                                  <li class="menu-item level-5" data-panel-parent="1-1-1-2">
                                    <a href="https://admissions.cornell.edu/how-to-apply/first-year-applicants/college-and-school-admissions-requirements" data-drupal-link-system-path="node/115">College and School Admissions Requirements</a>
                                  </li>
                                  <li class="menu-item level-5" data-panel-parent="1-1-1-2">
                                    <a href="https://admissions.cornell.edu/how-to-apply/first-year-applicants/cornell-first-year-writing-supplement-prompts" data-drupal-link-system-path="node/114">Cornell First-Year Writing Supplement</a>
                                  </li>
                                </ul>
                              </li>
                              <li class="menu-item menu-item--expanded level-4 parent" data-panel-parent="1-1-1" data-panel-id="1-1-1-3">
                                <a href="https://admissions.cornell.edu/how-to-apply/first-year-international-applicants" data-drupal-link-system-path="node/65">First-Year International Applicants</a>
                                <ul class="menu list-menu links expanded-menu">
                                  <li class="menu-item level-5" data-panel-parent="1-1-1-3">
                                    <a href="https://admissions.cornell.edu/how-to-apply/first-year-international-applicants#college-school-requirements" data-drupal-link-system-path="node/65">College and School Admissions Requirements</a>
                                  </li>
                                  <li class="menu-item level-5" data-panel-parent="1-1-1-3">
                                    <a href="https://admissions.cornell.edu/how-to-apply/first-year-international-applicants#cornell-supplement" data-drupal-link-system-path="node/65">Cornell First-Year Writing Supplement</a>
                                  </li>
                                </ul>
                              </li>
                              <li class="menu-item menu-item--expanded level-4 parent" data-panel-parent="1-1-1" data-panel-id="1-1-1-4">
                                <a href="https://admissions.cornell.edu/how-to-apply/transfer-applicants" data-drupal-link-system-path="node/67">Transfer Applicants</a>
                                <ul class="menu list-menu links expanded-menu">
                                  <li class="menu-item level-5" data-panel-parent="1-1-1-4">
                                    <a href="https://admissions.cornell.edu/how-to-apply/transfer-applicants/cornell-transfer-writing-supplement-prompts" data-drupal-link-system-path="node/118">Cornell Transfer Writing Supplement</a>
                                  </li>
                                  <li class="menu-item level-5" data-panel-parent="1-1-1-4">
                                    <a href="https://admissions.cornell.edu/how-to-apply/transfer-applicants/veterans-at-cornell" data-drupal-link-system-path="node/123">Veterans at Cornell</a>
                                  </li>
                                </ul>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-1">
                                <a href="https://admissions.cornell.edu/academics/majors" data-drupal-link-system-path="academics/majors">Majors</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-1">
                                <a href="https://admissions.cornell.edu/how-to-apply/advice-for-applicants" data-drupal-link-system-path="node/68">Advice for Applicants</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-1">
                                <a href="https://admissions.cornell.edu/how-to-apply/admissions-glossary" data-drupal-link-system-path="node/76">Admissions Glossary</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nav-panel hidden nav-panel-16 right-col" tabindex="-1" id="nav-panel-1-1-2" data-panel-id="1-1-2">
                          <div class="panel-wrap">
                            <button class="toggle-menu menu-breadcrumb" aria-label="Up one menu level" data-panel-target="nav-panel-1-1">Admissions</button>
                            <h2>
                              <a href="https://admissions.cornell.edu/visit-and-connect" data-drupal-link-system-path="node/54" class="nav-panel-header">Visit &amp; Connect</a>
                            </h2>
                            <ul class="menu list-menu links top-level-child">
                              <li class="menu-item level-4" data-panel-parent="1-1-2">
                                <a href="https://admissions.cornell.edu/visit-and-connect" data-drupal-link-system-path="node/54">Visit &amp; Connect Overview</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-2">
                                <a href="https://www.cornell.edu/visit/">Plan Your Campus Visit</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-2">
                                <a href="https://admissions.cornell.edu/visit-and-connect/connect-with-admissions-counselor" data-drupal-link-system-path="node/72">Connect with an Admissions Counselor</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-2">
                                <a href="https://admissions.cornell.edu/visit-and-connect/counselor-connections" data-drupal-link-system-path="node/116">Counselor Connections</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nav-panel hidden nav-panel-21 right-col" tabindex="-1" id="nav-panel-1-1-3" data-panel-id="1-1-3">
                          <div class="panel-wrap">
                            <button class="toggle-menu menu-breadcrumb" aria-label="Up one menu level" data-panel-target="nav-panel-1-1">Admissions</button>
                            <h2>
                              <a href="https://admissions.cornell.edu/diversity-at-cornell" data-drupal-link-system-path="node/55" class="nav-panel-header">Diversity at Cornell</a>
                            </h2>
                            <ul class="menu list-menu links top-level-child">
                              <li class="menu-item level-4" data-panel-parent="1-1-3">
                                <a href="https://admissions.cornell.edu/diversity-at-cornell" data-drupal-link-system-path="node/55">Diversity at Cornell Overview</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-3">
                                <a href="https://admissions.cornell.edu/diversity-at-cornell/diversity-outreach-and-strategic-partnerships-team" data-drupal-link-system-path="node/73">Diversity Outreach &amp; Strategic Partnerships Team</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-3">
                                <a href="https://admissions.cornell.edu/diversity-at-cornell/diversity-and-community-resources" data-drupal-link-system-path="node/74">Diversity &amp; Community Resources</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nav-panel hidden nav-panel-25 right-col" tabindex="-1" id="nav-panel-1-1-4" data-panel-id="1-1-4">
                          <div class="panel-wrap">
                            <button class="toggle-menu menu-breadcrumb" aria-label="Up one menu level" data-panel-target="nav-panel-1-1">Admissions</button>
                            <h2>
                              <a href="https://admissions.cornell.edu/academics" data-drupal-link-system-path="node/56" class="nav-panel-header">Academics</a>
                            </h2>
                            <ul class="menu list-menu links top-level-child">
                              <li class="menu-item level-4" data-panel-parent="1-1-4">
                                <a href="https://admissions.cornell.edu/academics" data-drupal-link-system-path="node/56">Academics Overview</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-4">
                                <a href="https://admissions.cornell.edu/academics/colleges-schools-and-educational-paths" data-drupal-link-system-path="node/77">Colleges, Schools, and Educational Paths</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-4">
                                <a href="https://admissions.cornell.edu/academics/majors" title="Cornell Majors Listings" data-drupal-link-system-path="academics/majors">Majors</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-4">
                                <a href="https://admissions.cornell.edu/academics/global-learning" data-drupal-link-system-path="node/78">Global Learning</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-4">
                                <a href="https://admissions.cornell.edu/academics/research-and-faculty" data-drupal-link-system-path="node/79">Research &amp; Faculty</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nav-panel hidden nav-panel-31 right-col" tabindex="-1" id="nav-panel-1-1-5" data-panel-id="1-1-5">
                          <div class="panel-wrap">
                            <button class="toggle-menu menu-breadcrumb" aria-label="Up one menu level" data-panel-target="nav-panel-1-1">Admissions</button>
                            <h2>
                              <a href="https://admissions.cornell.edu/life-at-cornell" data-drupal-link-system-path="node/57" class="nav-panel-header">Life at Cornell</a>
                            </h2>
                            <ul class="menu list-menu links top-level-child">
                              <li class="menu-item level-4" data-panel-parent="1-1-5">
                                <a href="https://admissions.cornell.edu/life-at-cornell" data-drupal-link-system-path="node/57">Life at Cornell Overview</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-5">
                                <a href="https://admissions.cornell.edu/life-at-cornell/residential-life-dining" data-drupal-link-system-path="node/81">Residential Life &amp; Dining</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-5">
                                <a href="https://admissions.cornell.edu/life-at-cornell/getting-involved" data-drupal-link-system-path="node/82">Getting Involved</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-5">
                                <a href="https://admissions.cornell.edu/life-at-cornell/recreation-sports" data-drupal-link-system-path="node/83">Recreation &amp; Sports</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-5">
                                <a href="https://admissions.cornell.edu/life-at-cornell/health-and-wellness" data-drupal-link-system-path="node/84">Health &amp; Wellness</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="nav-panel hidden nav-panel-37 right-col" tabindex="-1" id="nav-panel-1-1-6" data-panel-id="1-1-6">
                          <div class="panel-wrap">
                            <button class="toggle-menu menu-breadcrumb" aria-label="Up one menu level" data-panel-target="nav-panel-1-1">Admissions</button>
                            <h2>Important Links</h2>
                            <ul class="menu list-menu links top-level-child">
                              <li class="menu-item level-4" data-panel-parent="1-1-6">
                                <a href="https://admissions.cornell.edu/application-status-page" class="mobile-utility-link" data-drupal-link-system-path="node/99">Check Application Status</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-6">
                                <a href="https://admissions.cornell.edu/contact-us" class="mobile-utility-link" data-drupal-link-system-path="node/105">Contact Us</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-6">
                                <a href="https://admissions.cornell.edu/policies" class="mobile-utility-link" data-drupal-link-system-path="node/125">Policies</a>
                              </li>
                              <li class="menu-item level-4" data-panel-parent="1-1-6">
                                <a href="https://admissions.cornell.edu/request-information" class="mobile-utility-link" data-drupal-link-system-path="node/47">Request Information</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <div class="hdr-brand">
                  <a class="cu-seal" href="https://www.cornell.edu">
                    <img class="desktop-seal" src="https://live-cornell-admissions.pantheonsite.io/themes/custom/Clocktower-UA-Drupal-main/images/Cornell/cornell_seal_simple_b31b1b.svg" alt="Cornell University" />
                    <img class="mobile-seal" src="https://live-cornell-admissions.pantheonsite.io/themes/custom/Clocktower-UA-Drupal-main/images/Cornell/cornell_seal_simple_b31b1b.svg" alt="Cornell University" />
                  </a>
                </div>
                <div id="mobile-site-name">
                  <a href="https://admissions.cornell.edu">
                    <h1 class="site-name">Cornell Undergraduate Admissions</h1>
                  </a>
                </div>
              </header>
              <main id="main-content" class="cr">
                <div class="slate-content">
                  <div id="content" style="padding: 15px;">
                    <xsl:apply-templates select="xhtml:html/xhtml:body/node()" />
                  </div>
                </div>
                <div id="top-resources" role="complementary" aria-label="Top Resources">
                  <div class="layout layout--onecol">
                    <div class="layout__region layout__region--content">
                      <div>
                        <div class="resource-menu grid-expanded">
                          <h2 class="line-bottom">Top Enrollment Resources</h2>
                          <ul class="menu list-menu links">
                            <li class="menu-item menu-item--expanded top-level parent">
                              <button aria-expanded="false" class="toggle-menu">Admissions</button>
                              <ul class="menu list-menu links sub-menu">
                                <li>
                                  <a href="https://admissions.cornell.edu/how-to-apply">How to Apply</a>
                                </li>
                                <li>
                                  <a href="https://admissions.cornell.edu/visit-and-connect">Visit &amp; Connect</a>
                                </li>
                                <li>
                                  <a href="https://admissions.cornell.edu/application-status-page">Application Status</a>
                                </li>
                                <li>
                                  <a href="https://faq.enrollment.cornell.edu">Frequently Asked Questions</a>
                                </li>
                              </ul>
                            </li>
                            <li class="menu-item menu-item--expanded top-level parent">
                              <button aria-expanded="false" class="toggle-menu">Financial Aid</button>
                              <ul class="menu list-menu links sub-menu">
                                <li>
                                  <a href="https://finaid.cornell.edu/">Office of Financial Aid</a>
                                </li>
                                <li>
                                  <a href="https://finaid.cornell.edu/apply-for-aid">Apply for Aid</a>
                                </li>
                                <li>
                                  <a href="https://finaid.cornell.edu/cost-attend">Cost to Attend</a>
                                </li>
                                <li>
                                  <a href="https://finaid.cornell.edu/types-aid">Types of Aid</a>
                                </li>
                              </ul>
                            </li>
                            <li class="menu-item menu-item--expanded top-level parent">
                              <button aria-expanded="false" class="toggle-menu">Registrar</button>
                              <ul class="menu list-menu links sub-menu">
                                <li>
                                  <a href="https://registrar.cornell.edu/">Office of the Registrar</a>
                                </li>
                                <li>
                                  <a href="https://registrar.cornell.edu/academic-calendar">Academic Calendar</a>
                                </li>
                                <li>
                                  <a href="https://registrar.cornell.edu/classes-enrollment">Classes and Enrollment</a>
                                </li>
                                <li>
                                  <a href="https://courses.cornell.edu/">Courses of Study</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <p>Still need help? Look at the <a href="https://faq.enrollment.cornell.edu/">Frequently Asked Questions</a>,
or <a href="https://admissions.cornell.edu/contact-us">contact us</a>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <footer id="footer">
                <div class="main-footer">
                  <div id="block-footerleft">
                    <div class="layout layout--onecol">
                      <div class="layout__region layout__region--content">
                        <div>
                          <h2>Undergraduate Admissions Office</h2>
                          <p>From your first questions about Cornell to the completion of your application, the Undergraduate Admissions Office can help you find the information you need.</p>
                          <div class="ftr-wrap">
                            <div class="ftr-left ftr-address">
                              <span class="sr-only">Address</span>
                              <p class="glyphicons address">
                                <span>Cornell University</span>
                                <span>410 Thurston Avenue</span>
                                <span>Ithaca, NY 14850</span>
                              </p>
                            </div>
                            <div class="ftr-right ftr-links">
                              <ul>
                                <li>
                                  <span class="sr-only">Email</span>
                                  <a class="glyphicons email" href="mailto:admissions@cornell.edu">
                                    <span>admissions@cornell.edu</span>
                                  </a>
                                </li>
                                <li>
                                  <span class="sr-only">Phone Number</span>
                                  <a class="glyphicons phone" href="tel:+1(607)255-5241">
                                    <span>607.255.5241</span>
                                  </a>
                                </li>
                                <li>
                                  <span class="sr-only">Fax Number</span>
                                  <a class="glyphicons fax" href="fax:+1(607)255-0659">
                                    <span>607.255.0659</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="block-footermid">
                    <div class="layout layout--onecol">
                      <div class="layout__region layout__region--content">
                        <div>
                          <div class="ftr-social">
                            <h2>Social</h2>
                            <ul>
                              <li>
                                <a class="glyphicons" href="https://www.instagram.com/cornelladmissions/">
                                  <i class="fa-brands fa-square-instagram">
                                  </i>
                                  <span class="sr-only">Instagram</span>
                                </a>
                              </li>
                              <li>
                                <a class="glyphicons" href="https://www.youtube.com/channel/UC3LX-x78jpfHqK11FC47NBw">
                                  <i class="fa-brands fa-square-youtube">
                                  </i>
                                  <span class="sr-only">YouTube</span>
                                </a>
                              </li>
                              <li>
                                <a class="glyphicons" href="http://blogs.cornell.edu/admissions/">
                                  <i class="fa-brands fa-square-blogger">
                                  </i>
                                  <span class="sr-only">Blog</span>
                                </a>
                              </li>
                              <li>
                                <a class="glyphicons" href="https://www.facebook.com/cornelladmissions">
                                  <i class="fa-brands fa-square-facebook">
                                  </i>
                                  <span class="sr-only">Facebook</span>
                                </a>
                              </li>
                              <li>
                                <a class="glyphicons" href="https://www.snapchat.com/add/applycornell">
                                  <i class="fa-brands fa-square-snapchat">
                                  </i>
                                  <span class="sr-only">Snapchat</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="block-footerright">
                    <div class="layout layout--onecol">
                      <div class="layout__region layout__region--content">
                        <div>
                          <div class="ftr-links">
                            <h2>Enrollment</h2>
                            <ul>
                              <li>
                                <a href="https://admissions.cornell.edu">
                                  <span>Admissions</span>
                                </a>
                              </li>
                              <li>
                                <a href="https://finaid.cornell.edu">
                                  <span>Financial Aid</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="privacy-footer">
                  <ul>
                    <li>
                      <a href="https://www.cupolice.cornell.edu/campus-watch/">Annual Security and Fire Safety Reports</a>
                    </li>
                    <li>
                      <a href="https://admissions.cornell.edu/land-Acknowledgment">Land Acknowledgment</a>
                    </li>
                    <li>
                      <a href="https://privacy.cornell.edu/">University Privacy</a>
                    </li>
                    <li>
                      <a href="https://accessibility.cornell.edu/information-technology/web-accessibility/web-accessibility-assistance/" class="glyphicons accessibility">
                        <span>Web Accessibility Assistance</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
            </div>
          </div>
        </body>
      </html>
    </xsl:otherwise>
  </xsl:choose>
  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()" />
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>