module.exports = {
  title: `The Hitchhiker's Doyclopedia to the Galaxy`,
  description: `While the world sleep,I dreamWhile the world sleep,I dream`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://d0iloppa.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `D0iloppa/d0iloppa.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'UA-134826755-2', // Google Analytics Tracking ID
  author: {
    name: `권도일`,
    bio: {
      role: `개발자`,
      description: ['사람에 가치를 두는', '능동적으로 일하는', '이로운 것을 만드는'],
      thumbnail: 'zoomkoding.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/d0iloppa`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `kdi3939@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2010.04 ~ 2018.08',
        activity: '교내 정보보안 동아리 "INVISIBLE SHIELD" 활동',
      },
      {
        date: '2015.08 ~ 2015.11',
        activity: '한국전력공사 대학생 서포터즈 활동',
      },
      {
        date: '2020.12 ~ 2021.07',
        activity: '직업전문학교 자바응용sw(앱) 개발자 양성과정 교육 수료',
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: 'KEEP WALK',
        description: '음식의 칼로리만 서버 DB에 저장해 놓고, 여러 키워드들에 대하여 (ex. 햄버거, 롯데리아, 맥도날드…) 검색이 가능하도록 키워드를 배열로 관리한다. 이는 자동으로 사용자의 신체정보에 맞춰 활동해야 할 거리를 계산해준다. 이 거리정보를 기준으로 거리만큼 떨어져 있는 해당 음식점을 매핑시켜 준다.',
        techStack: ['android', ''],
        thumbnailUrl: 'profile/keepwalk.png',
      },


    ],

    certificates:[
      {
        title: '	2종보통운전면허',
        description: '',
      },

    ]

  },
};
