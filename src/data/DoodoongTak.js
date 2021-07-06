const basePath = "/img/project/doodoongtak"

let DoodoongTak = {
    title: "두둥탁",
    subTitle: "한번의 클릭으로 손쉽게 개인 쇼핑몰 사이트를 만들어주는 서비스",
    skill: "SpringBoot, MariaDB, Docker, JPA",
    term: "2019.04 - 2019.11",
    type: "개인 프로젝트",
    thumbnail: "https://blog.kakaocdn.net/dn/Q4Pwq/btqJDX6XwRM/wZLS8HJ4rHSA9oiFYcktq1/img.png",
    desc: "학교에서 배운 스프링 부트, 도커를 사용해 개발한 프로젝트 입니다.",
    video: {
        path: "",
        desc: "시연 영상"

    },
    images: [
        {
            path: `${basePath}/start.png`,
            desc: "사용자가 start 프로그램을 클릭합니다.",
        },
        {
            path: `${basePath}/dockerCompose.png`,
            desc: "도커 파일에 설정된 jdk, mariadb를 다운 받고 도커 컨테이너를 실행합니다. 설정해둔 데이터베이스와 테이블들을 생성합니다."
        },
        {
            path: `${basePath}/spring.png`,
            desc: "디비 생성이 끝나면 스프링 애플리케이션이 실행됩니다.",
        },  
        {
            path: `${basePath}/dashboard.png`,
            desc: "관리자 페이지에서 상품 관리, 테마설정(쇼핑몰 이름, 정보 등)를 할수있습니다.",
        },
        {
            path: `${basePath}/view.png`,
            desc: ``
        },
        {
            path: `${basePath}/product.png`,
            desc: `설정을 마치고 난 후 쇼핑몰 화면 입니다.`
        }
    ],
    git: "https://github.com/rbrbrb7290/WebPublishing-Service"
    
}

export default DoodoongTak