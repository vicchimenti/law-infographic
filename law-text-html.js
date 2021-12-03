/***
 *      @author Victor Chimenti, MSCS
 *      @see Seattle University School of Law
 *      @file law-text-html.js
 *          Law - Infographic
 *          ID: 5296
 *
 *      This content type displays from 1 to 4 infographic cards
 *
 *      Document will write once when the page loads
 *
 *      @version 3.2
 */








/***
 *      Import T4 Utilities
 */
 importClass(com.terminalfour.publish.utils.BrokerUtils);




 /***
  *      Extract values from T4 element tags
  *      and confirm valid existing content item field and trim strings
  */
 function getContentValues(tag) {
 
     try {
 
         let _tag = BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, tag).trim()
 
         return {
             isError: false,
             content: _tag == '' ? null : _tag
         }
 
     } catch (error) {
 
         return {
             isError: true,
             message: error.message
         }
     }
 }

 
 
  
 /***
  *      Write the document
  */
 function writeDocument(array) {
 
     for (let i = 0; i < array.length; i++) {
 
         document.write(array[i]);
     }
 }
 
 
 
 
 /***
  *      Main
  */
 try {
 
 
     /***
      *      Dictionary of content
      * */
     let infoDict = {
 
         itemName: getContentValues('<t4 type="content" name="Name" output="normal" modifiers="striptags,htmlentities" />'),
         infographicTitle: getContentValues('<t4 type="content" name="Infographic Title" output="normal" modifiers="striptags,htmlentities" />'),
         statNumOne: getContentValues('<t4 type="content" name="Statistic 1 Number" output="normal" modifiers="striptags,htmlentities" />'), 
         statIconOne: getContentValues('<t4 type="content" name="Statistic 1 Icon" output="normal" display_field="value" />'),
         statHeadingOne: getContentValues('<t4 type="content" name="Statistic 1 Heading" output="normal" modifiers="striptags,htmlentities" />'),
         statTextOne: getContentValues('<t4 type="content" name="Statistic 1 Text" output="normal" modifiers="medialibrary,nav_sections" />'),
         statColorOne: getContentValues('<t4 type="content" name="Statistic 1 Color Combination" output="normal" display_field="value" />'),
         statNumTwo: getContentValues('<t4 type="content" name="Statistic 2 Number" output="normal" modifiers="striptags,htmlentities" />'), 
         statIconTwo: getContentValues('<t4 type="content" name="Statistic 2 Icon" output="normal" display_field="value" />'),
         statHeadingTwo: getContentValues('<t4 type="content" name="Statistic 2 Heading" output="normal" modifiers="striptags,htmlentities" />'),
         statTextTwo: getContentValues('<t4 type="content" name="Statistic 2 Text" output="normal" modifiers="medialibrary,nav_sections" />'),
         statColorTwo: getContentValues('<t4 type="content" name="Statistic 2 Color Combination" output="normal" display_field="value" />'),
         statNumThree: getContentValues('<t4 type="content" name="Statistic 3 Number" output="normal" modifiers="striptags,htmlentities" />'), 
         statIconThree: getContentValues('<t4 type="content" name="Statistic 3 Icon" output="normal" display_field="value" />'),
         statHeadingThree: getContentValues('<t4 type="content" name="Statistic 3 Heading" output="normal" modifiers="striptags,htmlentities" />'),
         statTextThree: getContentValues('<t4 type="content" name="Statistic 3 Text" output="normal" modifiers="medialibrary,nav_sections" />'),
         statColorThree: getContentValues('<t4 type="content" name="Statistic 3 Color Combination" output="normal" display_field="value" />'),
         statNumFour: getContentValues('<t4 type="content" name="Statistic 4 Number" output="normal" modifiers="striptags,htmlentities" />'), 
         statIconFour: getContentValues('<t4 type="content" name="Statistic 4 Icon" output="normal" display_field="value" />'),
         statHeadingFour: getContentValues('<t4 type="content" name="Statistic 4 Heading" output="normal" modifiers="striptags,htmlentities" />'),
         statTextFour: getContentValues('<t4 type="content" name="Statistic 4 Text" output="normal" modifiers="medialibrary,nav_sections" />'),
         statColorFour: getContentValues('<t4 type="content" name="Statistic 4 Color Combination" output="normal" display_field="value" />'),
         summaryText: getContentValues('<t4 type="content" name="Summary Text" output="normal" modifiers="medialibrary,nav_sections" />'),
         zoneOption: getContentValues('<t4 type="content" name="Zone Option" output="normal" display_field="value" />'),
         anchortag: getContentValues('<t4 type="meta" meta="html_anchor" />'),
         contentId: getContentValues('<t4 type="meta" meta="content_id" />')
 
     }
 
 
 
 
     /***
      *  Initialize defaults
      * 
      * */
     let openTitle = '<div class="infographicTitle standardContent">';
     let closeTitle = '</div>'
     let beginningHTML = '<article class="infographicWrapper contentItem border-0 g-0" id="minor' + infoDict.contentId.content + '" aria-label="' + infoDict.headline.content + '">';
     let endingHTML = '</article>';




    /***
     *  Parse for title
     * 
     * */
     let infographicHeader =    (infoDict.infographicTitle.content) 
                                ? '<h2>' + infoDict.infographicTitle.content + '</h2>'
                                : '<h2 class="sr-only">Infographic</h2>';
 
 
 
     /***
      *  modify headline if special topic present
      * 
      * */
     function modifyWrapper(htmlClass) {
 
         beginningHTML = '<article class="newsroomMinorFeedItem newsroomBlurb card border-0 ' + htmlClass + '" id="minor' + infoDict.contentId.content + '" aria-label="' + infoDict.headline.content + '">';
     }
 
 
 
 
     /***
      *  modify dateline if special topic present
      * 
      * */
     function modifyDateline(specialTopic) {
 
         dateline = '<p class="newsroomArticlePublishedDate">' + infoDict.publishedDate.content + hyphen + '<span class="newsroomArticleSpecialCategory">' + specialTopic + '</span></p>';
     }
 
 
 
 
     /***
      *  process and prioritize special topics
      * 
      * */
     if (infoDict.catTags.content.includes(suLawInTheNews)) {
 
         modifyWrapper(suLawInTheNews);
         modifyDateline(suLawInTheNews);
 
     } else if (infoDict.catTags.content.includes(announcements)) {
 
         modifyWrapper(announcements);
         modifyDateline(announcements);
 
     } else if (infoDict.catTags.content.includes(events)) {
 
         modifyWrapper(events);
         modifyDateline(events);
 
     }
 
 
 
 
     /***
      *  process categories
      * 
      * */
     if (infoDict.catTags.content) {
 
         let arrayOfCats = infoDict.catTags.content.split(',');
         let listItems = assignList(arrayOfCats);
 
         // Print any tags that were selected
         listOfCats = '<div class="newsroomArticle tags topics visually-hidden"><ul class="categories">' + listItems + '</ul></div><br>';
     }
 
 
 
 
     /***
      *  default section link
      * 
      * */
     let publishedLink = (infoDict.sectionLink.content && infoDict.sectionLinkText.content) ?
         '<span class="newsLink"><a href="' + infoDict.sectionLink.content + '" class="card-link" target="_blank" title="Visit ' + infoDict.sectionLinkText.content + '"><em>' + infoDict.sectionLinkText.content + '</em></a></span>' :
         (infoDict.externalLink.content && infoDict.externalLinkText.content) ?
         '<span class="newsLink"><a href="' + infoDict.externalLink.content + '" class="card-link" target="_blank" title="Visit ' + infoDict.externalLinkText.content + '"><em>' + infoDict.externalLinkText.content + '</em></a></span>' :
         '<span class="newsLink visually-hidden">No Proper Link Provided</span>';
 
 
 
 
     /***
      *  determine if the article contains full text content
      * 
      * */
     let titleLink = (infoDict.articleFullBody.content) ?
         '<h3 class="newsroominfographicTitle card-title"><a href="' + infoDict.fullTextLink.content + '" class="card-link" target="_blank" aria-label="Read the full article at: ' + infoDict.headline.content + '" >' + infoDict.headline.content + '</a></h3>' :
         '<h3 class="newsroominfographicTitle card-title">' + infoDict.headline.content + '</h3>';
 
 
 
 
     /***
      *  parse for summary
      * 
      * */
     let summaryString = (infoDict.articleSummary.content) ?
         '<p class="newsroomArticleLead card-text">' + infoDict.articleSummary.content + '</p>' :
         '<p class="newsroomArticleLead card-text visually-hidden">No Summary Provided</p>';
 
 
 
 
     /***
      *  parse for pinned item
      * 
      * */
     let pinnedItem = (infoDict.pinned.content) ?
         '<div class="visually-hidden"><span class="articlePinned">' + infoDict.pinned.content + '</span></div>' :
         '<div class="visually-hidden"><span class="articlePinned">No Pin Entered</span></div>';
 
 
 
 
     /***
      *  write document once
      * 
      * */
     writeDocument(
         [
             beginningHTML,
             infoDict.anchortag.content,
        

             openCardBody,
             titleLink,
             publishedLink,
             summaryString,
             dateline,
             openHidden,
             listOfCats,
             pinnedItem,
             closeHidden,
             closeCardBody,


             endingHTML
         ]
     );
 
 
 
 
 } catch (err) {
     document.write(err.message);
 }