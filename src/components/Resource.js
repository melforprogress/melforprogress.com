import React from 'react'

//
//let iframeSRC = "https://docs.google.com/document/d/e/2PACX-1vTxA5mfzuOFOGbqCsNJnTCD5GjgAGfyd3sU3X3Lwev9oEb0Asnr0eHIRe8ytTxwqEf9kxH8J8rk1x_B/pub";
var docDiv = '<div><span class="c2"></span></div><h1 class="c4" id="h.kztlqwhkzg8i"><span class="c3">Recent Updates</span></h1><ul class="c7 lst-kix_buo92vdimcx9-0 start"><li class="c5"><span>The Legal Aid Society’s </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://legalaidnyc.org/wp-content/uploads/2020/03/LWWTF-Worker-ProtectionsBenefits-3.27.2020.pdf&amp;sa=D&amp;ust=1585780076223000">Worker Scenarios and Benefits</a></span></li></ul><h1 class="c4" id="h.gx1060bcmsbn"><span class="c3">Food</span></h1><ul class="c7 lst-kix_qz79lzuskytp-0 start"><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www1.nyc.gov/site/hra/help/snap-benefits-food-program.page&amp;sa=D&amp;ust=1585780076224000">SNAP Benefits</a></span><span class="c2"> to help supplement your food budget.</span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.foodbanknyc.org/get-help/&amp;sa=D&amp;ust=1585780076225000">Food Bank / Pantry locator</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.invisiblehandsdeliver.com/&amp;sa=D&amp;ust=1585780076225000">Invisible Hands</a></span><span> - Food delivery for at-risk community members.</span></li><li class="c5"><span>La Jornada, the Greater Flushing Chamber of Commerce, Kissena Synergy, Mel for Progress, Gutsier Living, Flushing Interfaith Council, and other community organizations are mobilizing volunteers to call and deliver food to local residents. If you need emergency food assistance, </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://forms.gle/Qx1Z3jN9u3EQc7RZA&amp;sa=D&amp;ust=1585780076225000">fill out this form</a></span><span class="c2">.</span></li></ul><span class="c2"></span><h1 class="c4" id="h.z8m1gn2p31fk"><span class="c3">Work</span></h1><ul class="c7 lst-kix_uj67ki638537-0 start"><li class="c5"><span>Gov. Cuomo has ended the seven-day waiting period before you can </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://labor.ny.gov/ui/how_to_file_claim.shtm&amp;sa=D&amp;ust=1585780076226000">apply for unemployment</a></span><span class="c2"> if you have lost a W-2 job (restaurant/retail/etc.)</span></li><li class="c5"><span>If you run a small business (incorporated as an LLC or other), you can </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www1.nyc.gov/site/sbs/businesses/covid19-business-outreach.page&amp;sa=D&amp;ust=1585780076226000">apply for a no-interest loan</a></span><span class="c2"> and NYC will cover 40% of payroll costs for businesses with fewer than 5 employees.</span></li></ul><span class="c2"></span><h1 class="c4" id="h.r4blwg26ap0y"><span class="c3">Rent/Housing</span></h1><ul class="c7 lst-kix_4ts0j7j0ixeg-0 start"><li class="c5"><span class="c2">There is a 90-day moratorium on evictions, so if you cannot pay rent you won&#39;t be kicked out. If your landlord issues a notice of eviction, call 311 to get help.</span></li></ul><span class="c2"></span><h1 class="c4" id="h.e65tqyte1gwt"><span class="c3">Schools</span></h1><ul class="c7 lst-kix_4gz3tznzeuox-0 start"><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.schools.nyc.gov/school-life/health-and-wellness/coronavirus-update&amp;sa=D&amp;ust=1585780076228000">NYC Coronavirus public school updates</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.businessinsider.com/coronavirus-free-spectrum-internet-wifi-offer-student-households-promotion-2020-3&amp;sa=D&amp;ust=1585780076228000">Spectrum</a></span><span class="c2"> is providing free internet for students.</span></li></ul><span class="c2"></span><h1 class="c4" id="h.ofn7r1qi59f3"><span class="c3">Domestic Violence</span></h1><ul class="c7 lst-kix_kklqgj20cwds-0 start"><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.thehotline.org/2020/03/13/staying-safe-during-covid-19/&amp;sa=D&amp;ust=1585780076229000">National Domestic Violence Hotline: Staying Safe During Covid-19</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.thehotline.org/help/path-to-safety/&amp;sa=D&amp;ust=1585780076229000">National Domestic Violence Hotline: Path to Safety</a></span></li></ul><span class="c2"></span><h1 class="c4" id="h.iid8lpx7ea2k"><span class="c3">Health &amp; Medical</span></h1><ul class="c7 lst-kix_rerti0ghn0rb-0 start"><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.cdc.gov/coronavirus/2019-ncov/index.html&amp;sa=D&amp;ust=1585780076230000">Centers for Disease Control and Prevention (CDC) COVID-19 Recommendations &amp; Guidelines</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.who.int/emergencies/diseases/novel-coronavirus-2019&amp;sa=D&amp;ust=1585780076230000">World Health Organization (WHO) COVID-19 Information Dashboard</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://coronavirus.health.ny.gov/home&amp;sa=D&amp;ust=1585780076231000">NY State COVID-19 Information Page (State level updates)</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www1.nyc.gov/site/doh/health/health-topics/coronavirus.page&amp;sa=D&amp;ust=1585780076231000">NYC Health COVID-19 Information Page</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://acl.gov/COVID-19&amp;sa=D&amp;ust=1585780076231000">Information for Older Adults &amp; People with Disabilities</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html&amp;sa=D&amp;ust=1585780076232000">Information for those at higher risk</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/pregnant-women-and-children.html&amp;sa=D&amp;ust=1585780076232000">Information for Pregnant People and Children</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2&amp;sa=D&amp;ust=1585780076232000">EPA Recommended List of Disinfectants</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.washingtonpost.com/graphics/2020/world/corona-simulator/&amp;sa=D&amp;ust=1585780076233000">How COVID-19 Spreads and how to “Flatten the Curve”</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://drive.google.com/file/d/1L7BsIaZtYHyd5aK_wpCktfEBrb2dmiN_/view&amp;sa=D&amp;ust=1585780076233000">Safer Drug Use Guidelines</a></span><span class="c2"> from the Harm Reduction Coalition</span></li></ul><span class="c2"></span><h1 class="c4" id="h.7zejweebx343"><span class="c3">Crisis Hotlines</span></h1><ul class="c7 lst-kix_itxncjis62fw-0 start"><li class="c5"><span>The </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://suicidepreventionlifeline.org/&amp;sa=D&amp;ust=1585780076234000">National Suicide Prevention Lifeline</a></span><span class="c2"> is 24/7, confidential and free: 1-800-273-8255 and through chat.</span></li><li class="c5"><span>The </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.thehotline.org/&amp;sa=D&amp;ust=1585780076235000">National Domestic Violence Hotline</a></span><span class="c2"> is 24/7, confidential and free: 1-800-799-7233 and through chat.</span></li><li class="c5"><span>The </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://hotline.rainn.org/online&amp;sa=D&amp;ust=1585780076235000">National Sexual Assault Hotline</a></span><span class="c2"> is 24/7, confidential and free: 800.656.HOPE (4673) and through chat.</span></li><li class="c5"><span>The </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.strongheartshelpline.org/&amp;sa=D&amp;ust=1585780076235000">StrongHearts Native Helpline</a></span><span class="c2"> for domestic/sexual violence is available 7am-10pm CT, confidential, and specifically for Native communities: 1−844-762-8483.</span></li><li class="c5"><span>The </span><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.translifeline.org/&amp;sa=D&amp;ust=1585780076236000">Trans LifeLine</a></span><span class="c2"> is staffed exclusively by trans operators is the only crisis line with a policy against non-consensual active rescue. 9am-3am CT: 1-877-565-8860.</span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.nationalparenthelpline.org/&amp;sa=D&amp;ust=1585780076236000">National Parent Helpline</a></span><span class="c2"> Monday-Friday 12pm-9am CT emotional support and advocacy for parents: 1-855-427-2736.</span></li></ul><span class="c2"></span><h1 class="c4" id="h.r2od0a518kft"><span class="c3">Further Reading</span></h1><ul class="c7 lst-kix_6xh9pyqu275i-0 start"><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.theguardian.com/world/2020/mar/13/coronavirus-latest-at-a-glance&amp;sa=D&amp;ust=1585780076237000">The Guardian’s Latest At A Glance</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.verywellmind.com/managing-coronavirus-anxiety-4798909&amp;sa=D&amp;ust=1585780076237000">How To Cope With Anxiety During Coronavirus COVID-19</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.theatlantic.com/ideas/archive/2020/03/who-gets-hospital-bed/607807/?utm_source%3Dshare%26utm_campaign%3Dshare&amp;sa=D&amp;ust=1585780076238000">The Extraordinary Decisions Facing Italian Doctors</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.theatlantic.com/ideas/archive/2020/03/coronavirus-cancel-everything/607675/&amp;sa=D&amp;ust=1585780076238000">Cancel Everything</a></span><span class="c2"> by Yascha Mounk (The Atlantic)</span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.commondreams.org/views/2020/03/10/six-quick-very-important-points-about-coronavirus-and-poverty-us&amp;sa=D&amp;ust=1585780076238000">Six Quick—But Very Important—Points About Coronavirus and Poverty in the US</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.vox.com/2020/3/10/21171481/coronavirus-us-cases-quarantine-cancellation&amp;sa=D&amp;ust=1585780076239000">How cancelled events and self-quarantines save lives in one chart</a></span><span class="c2"> (Vox)</span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.wwltv.com/article/news/health/coronavirus/hospitality-workers-derail-new-orleans-coronavirus-news-conference/289-514f20ba-1f73-414a-ae6e-616650f740dd?fbclid%3DIwAR3SsNOU6mw-087F-FNsYF3I4MUeCtyHl81W8ZySxI4yDIxct2gMHc9Mm_0&amp;sa=D&amp;ust=1585780076239000">New Orleans Hospitality Workers Alliance disrupt mayoral press conference “If We Work Sick, You Get Sick.”</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.upworthy.com/coronavirus-doctor-hospital-italy&amp;sa=D&amp;ust=1585780076240000">“Every Ventilator Becomes Like Gold”</a></span></li><li class="c5"><span class="c0"><a class="c1" href="https://www.google.com/url?q=https://www.theatlantic.com/photo/2020/03/empty-spaces-due-coronavirus-fears/607666/&amp;sa=D&amp;ust=1585780076240000">When Everyone Stays Home</a></span></li></ul><span class="c2"></span></div>';
/*var parseDoc;
var cleanResult = (data) => {
  console.log("We have data!");
  console.log(data);
  docDiv = data;
  docDiv = docDiv.slice(docDiv.indexOf("<body>")+6,docDiv.indexOf('<div id="footer">'));
  docDiv = docDiv.slice(docDiv.indexOf("</style>")+8);
  docDiv = docDiv.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
  console.log("Here is the sliced data:");
  console.log(docDiv);
  docDiv = "<div>Test</div>"
  //parseDoc = (new DOMParser().parseFromString(docDiv, "text/html"));
  //parseDoc = '<p className={test}>Test</p>';

}
var askReload = () => { docDiv = "<div> Please Reload the Page</div> "}

axios.get(iframeSRC, { crossdomain: true })
  .then((response) => 
    cleanResult(response.data)
  )
  .catch((response) => 
        askReload()
        );*/



export default function(props) {
  return (
    <div>
    <div dangerouslySetInnerHTML={{ __html: docDiv }} />
    </div>
  )
}
