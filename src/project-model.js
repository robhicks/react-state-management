export default {
  profile: {
    name: 'Special Project',
    owner: 'Robert Frost',
    updated: new Date()
  },
  userInstructions: {
    updated: new Date(),
    updater: 'Ralph Emerson',
    content: 'User instructions'
  },
  reviewerInstructions: {
    updated: new Date(),
    updater: 'Walt Whitman',
    content: 'Reviewer instructions'
  },
  warningInstructions: {
    updated: new Date(),
    updater: 'William Wordsworth',
    content: 'Warning instructions'
  },
  fieldsets: [
    {
      eventType: 'MEMBERSHIP',
      name: 'Membership',
      id: '1',
      fields: [
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the name of the Church unit as it was written, along with the accompanying term: Ward, Stake, Branch, Mission, District, Conference, and so forth. Do not correct misspellings or expand abbreviations.</span></p><p><span style="font-size: var(--p-font-size, 1em);">If the Church unit name was not recorded or was written as a variation of the word "unknown," press </span><strong style="font-size: var(--p-font-size, 1em);">Ctrl</strong><span style="font-size: var(--p-font-size, 1em);">+</span><strong style="font-size: var(--p-font-size, 1em);">B</strong><span style="font-size: var(--p-font-size, 1em);"> to mark this field blank.</span></p><p></p>',
          helpLocalized: '',
          labelId: 'MISC_NAME_CHURCH_ORIG',
          locale: 'en',
          name: 'Church Unit Name',
          nameLocalized: '',
          required: true,
          uid: '69c23425-b17f-45a1-a696-693e01e299c5',
          visible: true
        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>Do not include titles or terms, such as "Mr," "Mrs," or "Jr," with the name.</p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Include all aliases, nicknames, or variant names or surnames that were given for a person, separating them with the word <strong>Or</strong>.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B&nbsp;</strong>to mark this field blank.</p><p></p>',
          helpLocalized: '',
          labelId: 'PR_NAME_GN_ORIG',
          locale: 'en',
          name: 'Given Names',
          nameLocalized: '',
          required: true,
          uid: '871f015f-9334-44fc-a379-13c4a8ad5ad2',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Maiden names and former surnames should be typed in this field before the current surname. A maiden name or former surname was often indicated by the words "née," "formerly known as," or "born as." A maiden name was also sometimes written in parentheses.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_NAME_SURN_ORIG',
          locale: 'en',
          name: 'Surname',
          nameLocalized: '',
          required: true,
          uid: '20e4bd42-c557-4fdb-adac-9193bdeb6ecb',
          visible: true

        },
        {
          help: "<p><span style=\"font-size: var(--p-font-size, 1em);\">Select </span><strong style=\"font-size: var(--p-font-size, 1em);\">Male</strong><span style=\"font-size: var(--p-font-size, 1em);\"> or </span><strong style=\"font-size: var(--p-font-size, 1em);\">Female</strong><span style=\"font-size: var(--p-font-size, 1em);\"> from the drop-down list.</span><br></p><p>Index the sex only if it was specifically recorded or you can tell what it was from relationship terms, such as \"son\" or \"daughter,\" titles or terms, or other evidence in the language.</p><p>Do not assume the sex of a person based on given names.</p><p>If a priesthood calling, office, or abbreviation, such as \"D,\" \"T,\" \"P,\" \"E,\" \"HP,\" and so forth, was indicated, index the sex as <b>Male</b>. If a term such as “Sister” or a calling in the Relief Society or another women's organization was indicated, index the sex as <b>Female</b>.</p><p>If the sex was not recorded or was written as a variation of the word \"unknown,\" press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>",
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_SEX_CODE_ORIG',
          locale: 'en',
          name: 'Sex',
          nameLocalized: '',
          required: true,
          uid: '54120771-6972-466b-ae69-b7734a60a22f',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 1- or 2-digit number for the day.</span><br></p><p>Do not include zeros written at the beginning of a number. For example, "03" would be typed as <strong>3</strong>.</p><p>If the day was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BIR_DAY_ORIG',
          locale: 'en',
          name: 'Birth Day',
          nameLocalized: '',
          required: true,
          uid: '47b4e2ed-2a2f-43e5-b9fd-4008290780ae',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the first 3 letters of the month, and choose from the drop-down list: </span><strong style="font-size: var(--p-font-size, 1em);">Jan</strong><span style="font-size: var(--p-font-size, 1em);">, <strong>Feb</strong>, <strong>Mar</strong>, and so on.</span><br></p><p>When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as <strong>Dec</strong>.</p><p>If the month was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BIR_MONTH_ORIG',
          locale: 'en',
          name: 'Birth Month',
          nameLocalized: '',
          required: true,
          uid: '77fde35a-0590-46c7-a656-3aeab6752677',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>If you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BIR_YEAR_ORIG',
          locale: 'en',
          name: 'Birth Year',
          nameLocalized: '',
          required: true,
          uid: 'ad872951-23ba-4ca2-9090-bbe377238b97',
          visible: true
        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the name of the birthplace as it was written, separating levels of locality, from smallest to largest, with a comma. In this case, commas are necessary to distinguish the levels of locality. Do not correct misspellings or expand abbreviations.</span><br></p><p>Do not include house numbers, street addresses, or any localities smaller than the town or city. Do not index terms such as "city," "county," or "state" that may have been recorded in this field.</p><p>Do not include terms of approximation, such as "near," "about," or "around," when typing the name of a locality.</p><p>If the birthplace was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BIR_PLACE_ORIG',
          locale: 'en',
          name: 'Birthplace',
          nameLocalized: '',
          required: true,
          uid: 'f5326def-70b6-4476-89f2-4eafab096238',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Do not include titles or terms, such as "Mr" or "Jr," with the name.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_FTHR_NAME_GN_ORIG',
          locale: 'en',
          name: "Father's Given Names",
          nameLocalized: '',
          required: true,
          uid: 'b07617a6-e22d-4608-9394-eb056e405e71',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_FTHR_NAME_SURN_ORIG',
          locale: 'en',
          name: "Father's Surname",
          nameLocalized: '',
          required: true,
          uid: 'fb717afd-6763-4bbb-aec6-d4cef38d46b7',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Do not include titles or terms, such as "Mrs" or "Miss," in this field.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_MTHR_NAME_GN_ORIG',
          locale: 'en',
          name: "Mother's Given Names",
          nameLocalized: '',
          required: true,
          uid: 'dedfb963-57ca-4715-825b-cd4dbfb665e6',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>Maiden names and former surnames should be typed in this field before the current surname. A maiden name or former surname was often indicated by the words "née," "formerly known as," or "born as." A maiden name was also sometimes written in parentheses.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_MTHR_NAME_SURN_ORIG',
          locale: 'en',
          name: "Mother's Surname",
          nameLocalized: '',
          required: true,
          uid: '95c555ff-80c0-41ce-86d3-e3a15e2249a5',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 1- or 2-digit number for the day.</span><br></p><p>Do not include zeros written at the beginning of a number. For example, "03" would be typed as <strong>3</strong>.</p><p>If the day was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BLESS_DAY_ORIG',
          locale: 'en',
          name: 'Blessing Day',
          nameLocalized: '',
          required: true,
          uid: 'ba799070-bc8b-4808-a94e-c1c79bdb820e',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the first 3 letters of the month, and choose from the drop-down list: </span><strong style="font-size: var(--p-font-size, 1em);">Jan</strong><span style="font-size: var(--p-font-size, 1em);">, <strong>Feb</strong>, <strong>Mar</strong>, and so on.</span><br></p><p>When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as <strong>Dec</strong>.</p><p>If the month was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BLESS_MONTH_ORIG',
          locale: 'en',
          name: 'Blessing Month',
          nameLocalized: '',
          required: true,
          uid: '055ac822-9298-4d34-a4cd-a7c810386b0e',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>If you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BLESS_YEAR_ORIG',
          locale: 'en',
          name: 'Blessing Year',
          nameLocalized: '',
          required: true,
          uid: '8b2f8d22-78cc-4b4a-99dc-9992b077bde3',
          visible: true
        },
        {
          help: '<p>\n    Type the 1- or 2-digit number for the day.\n</p>\n<p>\n  Do not include zeros written at the beginning of a number. For example, "03" would be typed as \n  <strong>\n    3</strong>.\n</p>\n<p>\n  Rebaptism dates should be indexed in the Church Discipline Notes field based on the criteria found in the Church Discipline Notes field help instructions.\n</p>\n<p>\n  If the day was not recorded or was written as a variation of the word "unknown," press \n  <strong>\n    Ctrl</strong>+<strong>B\n  </strong>\n  to mark this field blank.\n</p>\n',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BAP_DAY_ORIG',
          locale: 'en',
          name: 'Baptism Day',
          nameLocalized: '',
          required: true,
          uid: '6e4f1ac5-23cb-4c28-b4dd-db582163b07d',
          visible: true

        },
        {
          help: '<p>\n    Type the first 3 letters of the month, and choose from the drop-down list: \n  <strong>\n    Jan</strong>, \n    <strong>\n      Feb</strong>, \n    <strong>\n      Mar</strong>, and so on.\n</p>\n<p>\n  When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as \n  <strong>\n    Dec</strong>.\n</p>\n<p>\n  Rebaptism dates should be indexed in the Church Discipline Notes field based on the criteria found in the Church Discipline Notes field help instructions.\n</p>\n<p>\n  If the month was not recorded or was written as a variation of the word "unknown," press \n  <strong>\n    Ctrl</strong>+<strong>B\n  </strong>\n  to mark this field blank.\n</p>\n',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BAP_MONTH_ORIG',
          locale: 'en',
          name: 'Baptism Month',
          nameLocalized: '',
          required: true,
          uid: 'd04719b0-3c86-4e05-8562-c19ebe6f1cd8',
          visible: true

        },
        {
          help: '<p>\n    Type the 4-digit number for the year.\n </p>\n<p>\n  If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.\n</p>\n<p>\n Rebaptism dates should be indexed in the Church Discipline Notes field based on the criteria found in the Church Discipline Notes field help instructions.\n</p>\n<p>\n    If you cannot determine the 4-digit year, press \n  <strong>\n    Ctrl</strong>+<strong>B\n  </strong>\n    to mark this field blank.\n</p>\n',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_BAP_YEAR_ORIG',
          locale: 'en',
          name: 'Baptism Year',
          nameLocalized: '',
          required: true,
          uid: 'a4f6c121-f9ba-4aed-be3b-b0c64e42917f',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names of the person who performed the baptism as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Do not include titles or terms, such as "Mr" or "Jr," with the name.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'BAP_OFFICIATOR_NAME_GN_ORIG',
          locale: 'en',
          name: "Baptism Officiator's Given Names",
          nameLocalized: '',
          required: true,
          uid: 'e1d8b7e8-99a2-4735-924e-50b74f971b2e',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname of the person who performed the baptism as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'BAP_OFFICIATOR_NAME_SURN_ORIG',
          locale: 'en',
          name: "Baptism Officiator's Surname",
          nameLocalized: '',
          required: true,
          uid: 'bac0904f-1110-4b9a-844d-360aaf7d6548',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 1- or 2-digit number for the day the principal person was ordained an Elder.</span><br></p><p>Do not include zeros written at the beginning of a number. For example, "03" would be typed as <strong>3</strong>.</p><p>If the day was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_ELDER_ORD_DAY_ORIG',
          locale: 'en',
          name: 'Elder Ordination Day',
          nameLocalized: '',
          required: true,
          uid: 'b24b2850-04ed-451d-833a-bcb59471b8d6',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the first 3 letters of the month the principal person was ordained an Elder, and choose from the drop-down list: </span><strong style="font-size: var(--p-font-size, 1em);">Jan</strong><span style="font-size: var(--p-font-size, 1em);">, <strong>Feb</strong>, <strong>Mar</strong>, and so on.</span><br></p><p>When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as <strong>Dec</strong>.</p><p>If the month was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_ELDER_ORD_MONTH_ORIG',
          locale: 'en',
          name: 'Elder Ordination Month',
          nameLocalized: '',
          required: true,
          uid: '9c386f16-f120-41b2-8048-b23c84051ee2',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year the principal person was ordained an Elder.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>If you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_ELDER_ORD_YEAR_ORIG',
          locale: 'en',
          name: 'Elder Ordination Year',
          nameLocalized: '',
          required: true,
          uid: 'e4a1fe0d-f1ec-49e4-bf2a-1ec2d5808e4d',
          visible: true
        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names of the person who ordained the principal individual an Elder as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Do not include titles or terms, such as "Mr" or "Jr," with the name.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'ELDER_ORD_OFFICIATOR_NAME_GN_ORIG',
          locale: 'en',
          name: "Elder Ordination Officiator's Given Names",
          nameLocalized: '',
          required: true,
          uid: 'c3f7f00f-4ecb-4963-8fcf-300c75ec2deb',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname of the person who ordained the principal individual an Elder as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'ELDER_ORD_OFFICIATOR_NAME_SURN_ORIG',
          locale: 'en',
          name: "Elder Ordination Officiator's Surname",
          nameLocalized: '',
          required: true,
          uid: 'be027339-a849-49c1-8ca5-acccad612863',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 1- or 2-digit number for the day the principal person was ordained a High Priest.</span><br></p><p>Do not include zeros written at the beginning of a number. For example, "03" would be typed as <strong>3</strong>.</p><p>If the day was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_HP_ORD_DAY_ORIG',
          locale: 'en',
          name: 'High Priest Ordination Day',
          nameLocalized: '',
          required: true,
          uid: '80b78522-90e3-4a15-8ebb-a86c4243cb6d',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the first 3 letters of the month the principal person was ordained a High Priest, and choose from the drop-down list: </span><strong style="font-size: var(--p-font-size, 1em);">Jan</strong><span style="font-size: var(--p-font-size, 1em);">, </span><strong style="font-size: var(--p-font-size, 1em);">Feb</strong><span style="font-size: var(--p-font-size, 1em);">, </span><strong style="font-size: var(--p-font-size, 1em);">Mar</strong><span style="font-size: var(--p-font-size, 1em);">, and so on.</span><br></p><p>When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as <strong>Dec</strong>.</p><p>If the month was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_HP_ORD_MONTH_ORIG',
          locale: 'en',
          name: 'High Priest Ordination Month',
          nameLocalized: '',
          required: true,
          uid: '3b22c27e-b31f-4197-89de-bc04915dcd9c',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year the principal person was ordained a High Priest.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>If you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_HP_ORD_YEAR_ORIG',
          locale: 'en',
          name: 'High Priest Ordination Year',
          nameLocalized: '',
          required: true,
          uid: 'c5801fbf-e794-465e-b66f-b97beb7a8545',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names of the person who ordained the principal individual a High Priest as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Do not include titles or terms, such as "Mr" or "Jr," with the name.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'HP_ORD_OFFICIATOR_NAME_GN_ORIG',
          locale: 'en',
          name: "High Priest Ordination Officiator's Given Names",
          nameLocalized: '',
          required: true,
          uid: '3bfcbc4a-b074-43ab-880a-fe486ee1ad96',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname of the person who ordained the principal individual a High Priest as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'HP_ORD_OFFICIATOR_NAME_SURN_ORIG',
          locale: 'en',
          name: "High Priest Ordination Officiator's Surname",
          nameLocalized: '',
          required: true,
          uid: '2a5b009f-d9c4-4505-ab48-2c8909a172df',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 1- or 2-digit number for the day the principal person was ordained a Seventy.</span><br></p><p>Do not include zeros written at the beginning of a number. For example, "03" would be typed as <strong>3</strong>.</p><p>If the day was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_SEVENTY_ORD_DAY_ORIG',
          locale: 'en',
          name: 'Seventy Ordination Day',
          nameLocalized: '',
          required: true,
          uid: '6af9dbd1-8993-46de-814a-7d607002fdb1',
          visible: true
        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the first 3 letters of the month the principal person was ordained a Seventy, and choose from the drop-down list: </span><strong style="font-size: var(--p-font-size, 1em);">Jan</strong><span style="font-size: var(--p-font-size, 1em);">, <strong>Feb</strong>, <strong>Mar</strong>, and so on.</span><br></p><p>When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as <strong>Dec</strong>.</p><p>If the month was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_SEVENTY_ORD_MONTH_ORIG',
          locale: 'en',
          name: 'Seventy Ordination Month',
          nameLocalized: '',
          required: true,
          uid: 'f9c8a15c-df9b-499a-b2d8-7dd226907814',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year the principal person was ordained a Seventy.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>If you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_SEVENTY_ORD_YEAR_ORIG',
          locale: 'en',
          name: 'Seventy Ordination Year',
          nameLocalized: '',
          required: true,
          uid: 'e497faf6-2046-43f1-8b1b-4a3b0a491507',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names of the person who ordained the principal individual a Seventy as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Do not include titles or terms, such as "Mr" or "Jr," with the name.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'SEVENTY_ORD_OFFICIATOR_NAME_GN_ORIG',
          locale: 'en',
          name: "Seventy Ordination Officiator's Given Names",
          nameLocalized: '',
          required: true,
          uid: '2ed3a4a4-3dce-49a0-98b3-0aa50d678613',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname of the person who ordained the principal individual a Seventy as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'SEVENTY_ORD_OFFICIATOR_NAME_SURN_ORIG',
          locale: 'en',
          name: "Seventy Ordination Officiator's Surname",
          nameLocalized: '',
          required: true,
          uid: '407bb391-7f6e-468c-9013-6f9e5daf6710',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>Do not include titles or terms, such as "Mr," "Mrs," or "Jr," with the name.</p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Include all aliases, nicknames, or variant names or surnames that were given for a person, separating them with the word <strong>Or</strong>.</p><p>Do not index a divorced or former spouse in this field. Index information about a divorce in the General Notes field.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'SP_NAME_GN_ORIG',
          locale: 'en',
          name: "Spouse's Given Names",
          nameLocalized: '',
          required: true,
          uid: 'b765d858-4ed7-4b2f-a8ff-a83900919b2f',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Maiden names and former surnames should be typed in this field before the current surname. A maiden name or former surname was often indicated by the words "née," "formerly known as," or "born as." A maiden name was also sometimes written in parentheses.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>Do not index a divorced or former spouse in this field. Index information about a divorce in the General Notes field.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'SP_NAME_SURN_ORIG',
          locale: 'en',
          name: "Spouse's Surname",
          nameLocalized: '',
          required: true,
          uid: 'b926310c-a1ff-44e4-8a7b-0f74c736671e',
          visible: true
        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 1- or 2-digit number for the day.</span><br></p><p>Do not include zeros written at the beginning of a number. For example, "03" would be typed as <strong>3</strong>.</p><p>If the day was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'CP_MAR_DAY_ORIG',
          locale: 'en',
          name: 'Marriage Day',
          nameLocalized: '',
          required: true,
          uid: '98159f5b-ee9e-4f36-b621-8b30a637c308',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the first 3 letters of the month, and choose from the drop-down list: </span><strong style="font-size: var(--p-font-size, 1em);">Jan</strong><span style="font-size: var(--p-font-size, 1em);">, </span><strong style="font-size: var(--p-font-size, 1em);">Feb</strong><span style="font-size: var(--p-font-size, 1em);">, </span><strong style="font-size: var(--p-font-size, 1em);">Mar</strong><span style="font-size: var(--p-font-size, 1em);">, and so on.</span><br></p><p>When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as <strong>Dec</strong>.</p><p>If the month was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'CP_MAR_MONTH_ORIG',
          locale: 'en',
          name: 'Marriage Month',
          nameLocalized: '',
          required: true,
          uid: 'e1dbcfba-b341-4794-ab61-f591b90ba469',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>If you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'CP_MAR_YEAR_ORIG',
          locale: 'en',
          name: 'Marriage Year',
          nameLocalized: '',
          required: true,
          uid: '1d19e9b4-4b29-4622-bc49-1ba0431f0160',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the name of the marriage place as it was written, separating levels of locality, from smallest to largest, with a comma. In this case, commas are necessary to distinguish the levels of locality. Do not correct misspellings or expand abbreviations.</span><br></p><p>Do not include house numbers, street addresses, or any localities smaller than the town or city. Do not index terms such as "city," "county," or "state" that may have been recorded in this field.</p><p>Do not include terms of approximation, such as "near," "about," or "around," when typing the name of a locality.</p><p>If the marriage place was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'CP_MAR_PLACE_ORIG',
          locale: 'en',
          name: 'Marriage Place',
          nameLocalized: '',
          required: true,
          uid: 'df143a7a-0e6d-4abe-99be-5dd76d68ef2b',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 1- or 2-digit number for the day.</span><br></p><p>Do not include zeros written at the beginning of a number. For example, "03" would be typed as <strong>3</strong>.</p><p>Do not index the burial date as the death date.</p><p>If the day was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_DEA_DAY_ORIG',
          locale: 'en',
          name: 'Death Day',
          nameLocalized: '',
          required: true,
          uid: 'aaa5e904-c275-4298-8be2-40662ae40665',
          visible: true
        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the first 3 letters of the month, and choose from the drop-down list: </span><strong style="font-size: var(--p-font-size, 1em);">Jan</strong><span style="font-size: var(--p-font-size, 1em);">, </span><strong style="font-size: var(--p-font-size, 1em);">Feb</strong><span style="font-size: var(--p-font-size, 1em);">, </span><strong style="font-size: var(--p-font-size, 1em);">Mar</strong><span style="font-size: var(--p-font-size, 1em);">, and so on.</span><br></p><p>When the month was written as a number, choose the corresponding month from the drop-down list. For example, the month 12 would be indexed as <strong>Dec</strong>.</p><p>Do not index the burial date as the death date.</p><p>If the month was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_DEA_MONTH_ORIG',
          locale: 'en',
          name: 'Death Month',
          nameLocalized: '',
          required: true,
          uid: 'ae934500-bfb7-4253-8a3f-444cf3f5f192',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>Do not index the burial date as the death date.</p><p>If you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_DEA_YEAR_ORIG',
          locale: 'en',
          name: 'Death Year',
          nameLocalized: '',
          required: true,
          uid: '3136ccc5-669c-4d8f-97ea-4244d3d16870',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the name of the death place as it was written, separating levels of locality, from smallest to largest, with a comma. In this case, commas are necessary to distinguish the levels of locality. Do not correct misspellings or expand abbreviations.</span><br></p><p>Do not include house numbers, street addresses, or any localities smaller than the town or city. Do not index terms such as "city," "county," or "state" that may have been recorded in this field.</p><p>Do not include terms of approximation, such as "near," "about," or "around," when typing the name of a locality.</p><p>Do not index the burial place as the death place.</p><p>If the death place was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'PR_DEA_PLACE_ORIG',
          locale: 'en',
          name: 'Death Place',
          nameLocalized: '',
          required: true,
          uid: '8c5b203f-f391-41d6-a058-edb641baab4b',
          visible: true

        },
        {
          help: '<p>\n\n    Note in this field what Church disciplinary action was taken, such as excommunication, disfellowshipment, probation, and so forth, and the reason for the action. Record Church disciplinary action information as follows:\n\n</p>\n<table>\n  <colgroup>\n    <col>\n    <col>\n    <col>\n  </colgroup>\n  <tbody>\n    <tr>\n      <td>\n        <strong>\n          19th Century (1800s)\n        </strong>\n      </td>\n      <td>\n      </td>\n      <td>\n        <strong>\n          20th Century (1900s)\n        </strong>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        • Note Church disciplinary action for immoral or sexual sin.\n      </td>\n      <td>\n      </td>\n      <td>\n        • Note \n        <font>\n          <strong>\n            all&nbsp;</strong></font><font>Church disciplinary action.\n        </font>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        • Note rebaptism and reconfirmation for excommunicated individuals. If not known, there is no need to note it.\n      </td>\n      <td>\n      </td>\n      <td>\n        • Note any rebaptism and reconfirmation information.\n      </td>\n    </tr>\n  </tbody>\n</table>\n<p>\n  Refer to the "Church Discipline and Restricted Content Guide" in the project instructions for further information.\n</p>\n<p>\n  As you make your note, quote from the image as much as you can.\n</p>\n<p>\n  Example of a Church discipline note: \n  <strong>\n    John Doe was excommunicated for adultery.\n  </strong>\n</p>\n<p>\n  If no information was given about Church discipline, press \n  <strong>\n    Ctrl</strong>+<strong>B\n  </strong>\n  to mark this field blank.</p>\n',
          helpLocalized: '',
          invalid: false,
          labelId: 'EXT_DISCIPLINARY_ACTION_ORIG',
          locale: 'en',
          name: 'Church Discipline Notes',
          nameLocalized: '',
          required: true,
          uid: 'd1ae9561-7781-47e6-922b-4af45521d895',
          visible: true

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">If restricted content, including sacred, private, and confidential information, is found in the record, type it in this field as it appears on the record.</span><br></p><p><strong>Sacred:</strong></p><p>Content that provides specific information about the temple ceremonies is considered sacred. This is temple ceremony information that an unendowed individual would not know, such as temple ceremony wording, details of temple clothing, and so forth. The mere mention of participating in a temple ceremony is not considered restricted content.</p><p><strong>Private:</strong></p><p>Privacy can be broken down into 2 parts: personal identifying information, and topics related to a person’s respect and dignity. Please note in the Restricted Content Notes field any of the following:</p><table><colgroup><col><col><col></colgroup><tbody><tr><td><strong>Always Note</strong></td><td></td><td><strong>Note depending on the date</strong></td></tr><tr><td>• Birth of a child less than 9 months after marriage</td><td></td><td>• Social security number, <strong>1920 and forward</strong></td></tr><tr><td>• Any discussion of sexual sin or content that is not found in the context of Church discipline</td><td></td><td>• Word of Wisdom violations, <b>19</b><strong>20 and forward</strong></td></tr><tr><td>• Mention or description of emotional, physical, and sexual abuse</td><td></td><td>• Receipt of state or Church welfare assistance, <strong>1945 and forward</strong></td></tr><tr><td>• Suicide</td><td></td><td>• Mention of mental or emotional illness, <strong>1920 and forward</strong></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>Confidential:</strong></p><p>Please note in the Restricted Content Notes field any of the following:</p><ul><li><strong>Always</strong> note statements of tithing worthiness; note tithing amounts paid by named individuals <strong>after 1908.</strong></li><li>Letters or other written forms of communication between general or local Church leaders on any potentially private or sensitive topic.</li><li>Any mention of a named individual converting from Islam to Christianity.</li></ul><p>When you make a note about restricted content, please quote from the image as much as you can.</p><p>Example of a restricted content note: <strong>John Doe paid his tithing in full and is now a member in good standing with the Church.</strong></p><p>Refer to the "Church Discipline and Restricted Content Guide" in the project instructions for further information.</p><p>When you are not sure if something is considered sacred, private, or confidential, note it in the Restricted Content Notes field.</p><p>Do not index dates or names of divorced individuals in this field. Index information about a divorce in the General Notes field.</p><p>If no restricted content was recorded, press <strong>Ctrl</strong>+<strong>B&nbsp;</strong>to mark this field blank.</p><p></p>',
          helpLocalized: '',
          invalid: false,
          labelId: 'EXT_RESTRICTED_CONTENT_ORIG',
          locale: 'en',
          name: 'Restricted Content Notes',
          nameLocalized: '',
          required: true,
          uid: '7c8aa89e-1365-4d03-a35e-2c23535f1d96',
          visible: true
        },
        {
          help: "<p><span style=\"font-size: var(--p-font-size, 1em);\">In this field, type any additional notes, including callings, dates and names of persons who performed Aaronic priesthood ordinations and confirmation.</span><br></p><p>Do not index the names of persons who performed a child's blessing.</p><p>Index the date of confirmation and name of the individual performing the confirmation in this field as follows: <strong>Confirmed by Robert Lewis on 4 January 1914</strong>.</p><p>Do not index former priesthood offices in this field.</p><p>For divorce records, index only the name of the former spouse and divorce date in this field as shown in the following example:</p><p><idx-image-helper mode=\"edit\" contenteditable=\"false\" ref-id=\"b9d3cfbc-2948-4881-a284-cd95e23545fe:help\" ref-type=\"help\" image=\"{&quot;deepzoom&quot;:&quot;https://sg30p0.familysearch.org/service/records/storage/deepzoomcloud/dz/v1/dgs:106197675_00543/image.xml?session=c6ef91b4-4e41-4b60-906d-77920d0793d9-prod&amp;ctx=IndexingCtx&quot;,&quot;name&quot;:&quot;106197675_00543&quot;,&quot;selected&quot;:true,&quot;templateUri&quot;:&quot;template://idx-project/templates/image;imageid=d2e6dc84-c64d-4234-8b02-0683e53ffb29?name=106197675_00543&quot;,&quot;thumbnail&quot;:&quot;https://sg30p0.familysearch.org/service/records/storage/dascloud/das/v2/dgs:106197675.106197675_00543/thumb_p200.jpg?session=c6ef91b4-4e41-4b60-906d-77920d0793d9-prod&amp;ctx=IndexingCtx&quot;,&quot;id&quot;:&quot;toUn-DFRQMLup-HFSMLY&quot;,&quot;uid&quot;:&quot;e64bae2b-7492-4be7-b81b-29bb4cb18464&quot;,&quot;type&quot;:&quot;SAMPLE&quot;,&quot;projectId&quot;:&quot;88155fd9-cc24-446e-96fb-72ab0dd3e363&quot;,&quot;uri&quot;:&quot;template://idx-project/templates/image;imageid=d2e6dc84-c64d-4234-8b02-0683e53ffb29?name=106197675_00543&quot;,&quot;overlay&quot;:{&quot;refId&quot;:&quot;b9d3cfbc-2948-4881-a284-cd95e23545fe:help&quot;,&quot;type&quot;:&quot;help&quot;,&quot;name&quot;:&quot;106197675_00543&quot;,&quot;uuid&quot;:&quot;e64bae2b-7492-4be7-b81b-29bb4cb18464&quot;,&quot;linkTitle&quot;:&quot;<p>Divorce Example</p>&quot;,&quot;captions&quot;:&quot;<p>1. Given Names: <b>Dean Lamar</b></p><p>2. Surname: <b>Hansen</b></p><p>3. Sex: <b>M</b></p><p>4. Birth Day: <b>4</b></p><p>5. Birth Month: <b>Jan</b></p><p>6. Birth Year: <b>1939</b></p><p>7. Birthplace: <b>Amalga, Utah</b></p><p>8. General Notes: <b>Divorced from Joanne Layne Hansen in Aug 1967</b></p><p></p>&quot;},&quot;objects&quot;:[{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:269.68,&quot;top&quot;:674.03,&quot;width&quot;:264.1,&quot;height&quot;:90.97,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:551.39,&quot;top&quot;:671.09,&quot;width&quot;:434.3,&quot;height&quot;:90.97,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1045.85,&quot;top&quot;:655.54,&quot;width&quot;:120.31,&quot;height&quot;:105.64,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1192.57,&quot;top&quot;:661.41,&quot;width&quot;:117.38,&quot;height&quot;:96.83,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1312.88,&quot;top&quot;:667.28,&quot;width&quot;:132.05,&quot;height&quot;:90.97,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1444.94,&quot;top&quot;:658.48,&quot;width&quot;:149.66,&quot;height&quot;:99.77,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1600.76,&quot;top&quot;:661.12,&quot;width&quot;:363.87,&quot;height&quot;:93.9,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:2090.81,&quot;top&quot;:649.97,&quot;width&quot;:293.45,&quot;height&quot;:90.97,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;rect&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:2565.9,&quot;top&quot;:635,&quot;width&quot;:645.58,&quot;height&quot;:152.59,&quot;fill&quot;:&quot;transparent&quot;,&quot;stroke&quot;:&quot;red&quot;,&quot;strokeWidth&quot;:8,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;rx&quot;:0,&quot;ry&quot;:0},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:2875.49,&quot;top&quot;:804.9,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;8&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:2221.1,&quot;top&quot;:752.08,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;8&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1772.72,&quot;top&quot;:762.65,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;7&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1496.29,&quot;top&quot;:765.29,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;6&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1343.7,&quot;top&quot;:762.35,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;5&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1225.73,&quot;top&quot;:762.35,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;4&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:1076.07,&quot;top&quot;:762.35,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;3&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:751.52,&quot;top&quot;:762.35,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;2&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}},{&quot;type&quot;:&quot;i-text&quot;,&quot;originX&quot;:&quot;left&quot;,&quot;originY&quot;:&quot;top&quot;,&quot;left&quot;:392.34,&quot;top&quot;:759.42,&quot;width&quot;:55.62,&quot;height&quot;:113,&quot;fill&quot;:&quot;rgb(256,0,0)&quot;,&quot;stroke&quot;:null,&quot;strokeWidth&quot;:1,&quot;strokeDashArray&quot;:null,&quot;strokeLineCap&quot;:&quot;butt&quot;,&quot;strokeLineJoin&quot;:&quot;miter&quot;,&quot;strokeMiterLimit&quot;:10,&quot;scaleX&quot;:1,&quot;scaleY&quot;:1,&quot;angle&quot;:0,&quot;flipX&quot;:false,&quot;flipY&quot;:false,&quot;opacity&quot;:1,&quot;shadow&quot;:null,&quot;visible&quot;:true,&quot;clipTo&quot;:null,&quot;backgroundColor&quot;:&quot;&quot;,&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;globalCompositeOperation&quot;:&quot;source-over&quot;,&quot;transformMatrix&quot;:null,&quot;skewX&quot;:0,&quot;skewY&quot;:0,&quot;text&quot;:&quot;1&quot;,&quot;fontSize&quot;:100,&quot;fontWeight&quot;:&quot;normal&quot;,&quot;fontFamily&quot;:&quot;arial&quot;,&quot;fontStyle&quot;:&quot;&quot;,&quot;lineHeight&quot;:1.16,&quot;textDecoration&quot;:&quot;&quot;,&quot;textAlign&quot;:&quot;left&quot;,&quot;textBackgroundColor&quot;:&quot;&quot;,&quot;charSpacing&quot;:0,&quot;styles&quot;:{&quot;0&quot;:{&quot;1&quot;:{}}}}]}\" labels=\"Link title,captions\" toolbar-id=\"english-fieldHelp\" editor-id=\"9275429f-934c-4979-a647-e81cb6c65376:help\">\n </idx-image-helper></p><p><span style=\"font-size: var(--p-font-size, 1em);\">For marriage and divorce records, do not index the membership, or reason for divorce if given.</span><br></p><p>For marriage records, index the kind of marriage (temple marriage, civil marriage, or other).</p><p>Do not index the cause of death in this field. If the cause of death was listed as suicide, include that information in the Restricted Content Notes field.</p><p>Do not type notes about Church discipline in this field; type that information in the Church Discipline Notes field. Do not type notes about restricted content in this field; type that information in the Restricted Content Notes field.</p><p>If no other notes or information was recorded, press <strong>Ctrl</strong>+<strong>B&nbsp;</strong>to mark this field blank.</p>",
          helpLocalized: '',
          invalid: false,
          labelId: 'NOTE_MISC_ORIG',
          locale: 'en',
          name: 'General Notes',
          nameLocalized: '',
          required: true,
          uid: '9275429f-934c-4979-a647-e81cb6c65376',
          visible: true

        }

      ]
    },
    {
      eventType: 'RELIGIOUS',
      name: 'Religious',
      id: '2',
      fields: [
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the name of the Church unit as it was written, along with the accompanying term: Ward, Stake, Branch, Mission, District, Conference, and so forth. Do not correct misspellings or expand abbreviations.</span><br></p><p>If the Church unit name was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          labelId: 'MISC_NAME_CHURCH_ORIG',
          locale: 'en',
          miniHelp: '',
          miniHelpLocalized: '',
          name: 'Church Unit Name',
          nameLocalized: '',
          required: true,
          standardsAndAuthorityListHierarchy: [],
          uid: '778e3f98-4d9a-43db-b9cb-5ecc255a4aaf',
          visible: true,
          active: false
        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the 4-digit number for the year. The year is usually indicated at the top of the record under the church unit name.</span><br></p><p>If only a 2-digit number was recorded, you can sometimes determine the first 2 digits of the 4-digit year from other information, such as the project dates or other contextual information on the image.</p><p>If the year was not recorded, or if you cannot determine the 4-digit year, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          labelId: 'EVENT_YEAR_ORIG',
          locale: 'en',
          miniHelp: '',
          miniHelpLocalized: '',
          name: 'Record Year',
          nameLocalized: '',
          properties: {
            alphaSet: 'numeric',
            autoIncrement: false,
            canAddValues: false,
            headerField: false,
            maintainHistory: false,
            maxLength: null,
            maxValue: '2021',
            minLength: null,
            minValue: '1686',
            capitalization: 'auto',
            symbols: ''
          },
          required: true,
          standardsAndAuthorityListHierarchy: [],
          uid: 'e7bae051-f501-4a92-97a5-6446b7182772',
          visible: true,
          active: false

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the given names as they were written. Do not correct misspellings or expand abbreviations.</span><br></p><p>Do not include titles or terms, such as "Mr," "Mrs," or "Jr," with the name.</p><p>The given names may be written either before or after the surname. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in this field.</p><p>Include all aliases, nicknames, or variant names or surnames that were given for a person, separating them with the word <strong>Or</strong>.</p><p>If the given names were not recorded or were written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B&nbsp;</strong>to mark this field blank.</p><p></p>',
          helpLocalized: '',
          labelId: 'PR_NAME_GN_ORIG',
          locale: 'en',
          miniHelp: '',
          miniHelpLocalized: '',
          name: 'Given Names',
          nameLocalized: '',
          properties: {
            alphaSet: 'alphabetic',
            autoIncrement: false,
            canAddValues: false,
            headerField: false,
            maintainHistory: false,
            maxLength: '128',
            maxValue: null,
            minLength: null,
            minValue: null,
            capitalization: 'auto',
            symbols: ''
          },
          required: true,
          standardsAndAuthorityListHierarchy: [],
          uid: '9573db21-fea4-494f-8bd5-8e8ddd2b1360',
          visible: true,
          active: false

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">Type the surname as it was written. Do not correct misspellings or expand abbreviations.</span><br></p><p>The surname may be written either before or after the given names. Be sure to type the names in the correct fields in the data entry area. If you cannot determine if a name is a given name or a surname, type it in the Given Names field.</p><p>Maiden names and former surnames should be typed in this field before the current surname. A maiden name or former surname was often indicated by the words "née," "formerly known as," or "born as." A maiden name was also sometimes written in parentheses.</p><p>Do not assume a surname from the surnames of others mentioned in the document.</p><p>If the surname was not recorded or was written as a variation of the word "unknown," press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          labelId: 'PR_NAME_SURN_ORIG',
          locale: 'en',
          miniHelp: '',
          miniHelpLocalized: '',
          name: 'Surname',
          nameLocalized: '',
          properties: {
            alphaSet: 'alphabetic',
            autoIncrement: false,
            canAddValues: false,
            headerField: false,
            maintainHistory: true,
            maxLength: '128',
            maxValue: null,
            minLength: null,
            minValue: null,
            capitalization: 'auto',
            symbols: ''
          },
          required: true,
          standardsAndAuthorityListHierarchy: [],
          uid: '5c024763-bcb6-4123-80b1-737b51ec5851',
          visible: true,
          active: false

        },
        {
          help: '<p>\n\n    Note in this field what Church disciplinary action was taken, such as excommunication, disfellowshipment, probation, and so forth, and the reason for the action. Record Church disciplinary action information as follows:\n\n</p>\n<table>\n  <colgroup>\n    <col>\n    <col>\n    <col>\n  </colgroup>\n  <tbody>\n    <tr>\n      <td>\n        <strong>\n          19th Century (1800s)\n        </strong>\n      </td>\n      <td>\n      </td>\n      <td>\n        <strong>\n          20th Century (1900s)\n        </strong>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        • Note Church disciplinary action for immoral or sexual sin.\n      </td>\n      <td>\n      </td>\n      <td>\n        • Note \n        <font>\n          <strong>\n            all&nbsp;</strong></font><font>Church disciplinary action.\n        </font>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        • Note rebaptism and reconfirmation for excommunicated individuals. If not known, there is no need to note it.\n      </td>\n      <td>\n      </td>\n      <td>\n        • Note any rebaptism and reconfirmation information.\n      </td>\n    </tr>\n  </tbody>\n</table>\n<p>\n  Refer to the "Church Discipline and Restricted Content Guide" in the project instructions for further information.\n</p>\n<p>\n  As you make your note, quote from the image as much as you can.\n</p>\n<p>\n  Example of a Church discipline note: \n  <strong>\n    John Doe was excommunicated for adultery.\n  </strong>\n</p>\n<p>\n  If no information was given about Church discipline, press \n  <strong>\n    Ctrl</strong>+<strong>B\n  </strong>\n  to mark this field blank.\n</p>\n\n',
          helpLocalized: '',
          labelId: 'EXT_DISCIPLINARY_ACTION_ORIG',
          locale: 'en',
          miniHelp: '',
          miniHelpLocalized: '',
          name: 'Church Discipline Notes',
          nameLocalized: '',
          properties: {
            alphaSet: 'alphanumeric',
            autoIncrement: false,
            canAddValues: false,
            headerField: false,
            maintainHistory: false,
            maxLength: '300',
            maxValue: null,
            minLength: null,
            minValue: null,
            capitalization: 'auto',
            symbols: ''
          },
          required: true,
          standardsAndAuthorityListHierarchy: [],
          uid: '74e7a149-775b-4d76-8ab2-feacf932d607',
          visible: true,
          active: false

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">If restricted content, including sacred, private, and confidential information, is found in the record, type it in this field as it appears on the record.</span><br></p><p><strong>Sacred:</strong></p><p>Content that provides specific information about the temple ceremonies is considered sacred. This is temple ceremony information that an unendowed individual would not know, such as temple ceremony wording, details of temple clothing, and so forth. The mere mention of participating in a temple ceremony is not considered restricted content.</p><p><strong>Private:</strong></p><p>Privacy can be broken down into 2 parts: personal identifying information, and topics related to a person’s respect and dignity. Please note in the restricted content field any of the following:</p><p></p><table><colgroup><col><col><col></colgroup><tbody><tr><td><strong>Always Note</strong></td><td></td><td><strong>Note depending on the date</strong></td></tr><tr><td>• Birth of a child less than 9 months after marriage</td><td></td><td>• Social security number, <strong>1920 and forward</strong><strong></strong></td></tr><tr><td>• Any discussion of sexual sin or content that is not found in the context of Church discipline</td><td></td><td>• Word of Wisdom violations, <strong>1920 and forward</strong></td></tr><tr><td>• Mention or description of emotional, physical, and sexual abuse</td><td></td><td>• Receipt of state or Church welfare assistance, <strong>1945 and forward</strong></td></tr><tr><td>• Suicide</td><td></td><td>• Mention of mental or emotional illness, <strong>1920 and forward</strong></td></tr><tr><td></td><td></td><td></td></tr></tbody></table><p><strong>Confidential:</strong></p><p>Please note in the restricted content field any of the following:</p><ul><li><strong>Always</strong> note statements of tithing worthiness; note tithing amounts paid by named individuals <strong>after 1908.</strong></li><li>Letters or other written forms of communication between general or local Church leaders on any potentially private or sensitive topic.</li><li>Any mention of a named individual converting from Islam to Christianity.</li></ul><p>When you make a note about restricted content, please quote from the image as much as you can.&nbsp;</p><p>Example of a restricted content note: <strong>John Doe paid his tithing in full and is now a member in good standing with the Church.</strong></p><p>Refer to the "Church Discipline and Restricted Content Guide" in the project instructions for further information.</p><p>When you are not sure if something is considered sacred, private, or confidential, note it in the restricted content field.</p><p>If no restricted content was recorded, press <strong>Ctrl</strong>+<strong>B&nbsp;</strong>to mark this field blank.</p><p></p>',
          helpLocalized: '',
          labelId: 'EXT_RESTRICTED_CONTENT_ORIG',
          locale: 'en',
          miniHelp: '',
          miniHelpLocalized: '',
          name: 'Restricted Content Notes',
          nameLocalized: '',
          properties: {
            alphaSet: 'alphanumeric',
            autoIncrement: false,
            canAddValues: false,
            headerField: false,
            maintainHistory: false,
            maxLength: '300',
            maxValue: null,
            minLength: null,
            minValue: null,
            capitalization: 'auto',
            symbols: ''
          },
          required: true,
          standardsAndAuthorityListHierarchy: [],
          uid: '6b583eba-c3f1-411e-9228-087c6093485e',
          visible: true,
          active: false

        },
        {
          help: '<p><span style="font-size: var(--p-font-size, 1em);">In this field, type any additional notes, including callings, dates and names of persons who performed Aaronic priesthood ordinations and confirmation, any crossed-out and corrected information not indexed in other fields, or any other information written on the record.</span><br></p><p>Type the organization and position of church officers in this field with the organization followed by the position. For example, <strong>Bishopric Second Counselor</strong>.</p><p>Do not type notes about Church discipline in this field; type that information in the Church Discipline Notes field. Do not type notes about restricted content in this field; type that information in the Restricted Content Notes field.</p><p>If no other notes or information was recorded, press <strong>Ctrl</strong>+<strong>B</strong> to mark this field blank.</p><p></p>',
          helpLocalized: '',
          labelId: 'NOTE_MISC_ORIG',
          locale: 'en',
          miniHelp: '',
          miniHelpLocalized: '',
          name: 'General Notes',
          nameLocalized: '',
          properties: {
            alphaSet: 'alphanumeric',
            autoIncrement: false,
            canAddValues: false,
            headerField: false,
            maintainHistory: false,
            maxLength: '500',
            maxValue: null,
            minLength: null,
            minValue: null,
            capitalization: 'auto',
            symbols: ''
          },
          required: true,
          standardsAndAuthorityListHierarchy: [],
          uid: 'c50bde94-b4bd-4150-8c03-9da4617448c9',
          visible: true,
          active: false

        }

      ]
    }
  ]
}
