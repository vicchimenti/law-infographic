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
 *      @version 3.4
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
    let beginningHTML = '<article class="infographicWrapper contentItem col border-0 g-0" id="infographic' + infoDict.contentId.content + '" aria-label="Infographic" data-position-default="Main" data-position-selected="' + infoDict.zoneOption.content + '">';
    let anchorString = infoDict.anchortag.content || '<span class="visually-hidden">No Anchor</span>';
    let infographicHeader = '<h2 class="sr-only">Infographic</h2>';
    let openTitle = '<div class="infographicTitle standardContent visually-hidden">';
    let closeTitle = '</div>';
    let cardDeck = '<span class="card visually-hidden"></span>';
    let openGroup = '<div class="infographic card-group">';
    let closeGroup = '</div>';
    let summaryString = '<span class="visually-hidden"></span>';
    let openSummary = '<div class="infographicSummary standardContent visually-hidden">';
    let closeSummary = '</div>';
    let endingHTML = '</article>';



    /***
     *  Parse for title
     * 
     * */
    if (infoDict.infographicTitle.content) {

        beginningHTML = '<article class="infographicWrapper contentItem col border-0 g-0" id="infographic' + infoDict.contentId.content + '" aria-label="' + infoDict.infographicTitle.content + '" data-position-default="Main" data-position-selected="' + infoDict.zoneOption.content + '">';
        openTitle = '<div class="infographicTitle standardContent">';
        infographicHeader = '<h2 class="m-1 p-1 text-center">' + infoDict.infographicTitle.content + '</h2>';
    }




    /***
     *  Parse for Footer
     * 
     * */
    if (infoDict.summaryText.content) {

        openSummary = '<div class="infographicSummary standardContent">';
        summaryString = infoDict.summaryText.content;
    }




    /***
     *  Parse for Cards
     * 
     * */
    if (infoDict.statNumOne.content) {

        // set card defaults
        let openCardWrapperOne = '<div class="cardinfographicItem card color' + infoDict.statColorOne.content + '">';
        let openCardBodyOne = '<div class="card-body">';
        let cardNumOne = '<div class="infographicItemNumber"><span class="card-text text-center">' + infoDict.statNumOne.content + '</span></div>';
        let cardHeadingOne = '<div class="infographicItemHeader"><p class="card-title text-center text-uppercase">' + infoDict.statHeadingOne.content + '</p></div>';
        let closeCardBodyOne = '</div>';
        let closeCardWrapperOne = '</div>';

        // parse for icon
        let cardIconOne =   (infoDict.statIconOne.content)
                            ? '<div class="infographicItemIcon"><span class="text-center fa ' + infoDict.statIconOne.content + '"></span></div>'
                            : '<div class="infographicItemIcon visually-hidden"><span class="visually-hidden">No Icon</span></div>';

        // parse for text
        let cardTextOne =   (infoDict.statTextOne.content)
                            ? '<div class="infographicItemText standardContent card-text">' + infoDict.statTextOne.content + '</div>'
                            : '<div class="infographicItemText visually-hidden"><span class="visually-hidden">No Text</span></div>';



        let cardOne = openCardWrapperOne + openCardBodyOne + cardIconOne + cardNumOne + cardHeadingOne + cardTextOne + closeCardBodyOne + closeCardWrapperOne;

        cardDeck = cardOne;
    }



 
    /***
     *  write document once
     * 
     * */
    writeDocument(
        [
            beginningHTML,
            anchorString,
            openTitle,
            infographicHeader,
            closeTitle,
            openGroup,
            cardDeck,
            closeGroup,
            openSummary,
            summaryString,
            closeSummary,
            endingHTML
        ]
    );

 
 
 
 } catch (err) {
     document.write(err.message);
 }