import "./scss/main.scss";
import "./images/open_graph.png";

(() => {
    const elements = {
        cakeType: document.querySelector(".suggestion__type"),
        cakeFlavour: document.querySelector(".suggestion__flavour"),
        cakeFilling: document.querySelector(".suggestion__filling")
    };

    const cakeTypes = [
        {
            name: "Pão de ló",
            info: "muito fofo, sauve e leve"
        },
        {
            name: "Bolo de manteiga",
            info: "muito saborosos, pesados e densos"
        },
        {
            name: "Chiffon",
            info: "muito saborosos, pesados e densos"
        }
    ];

    const cakeFlavours = [
        "Chocolate",
        "Laranja",
        "Limão",
        "Amêndoa",
        "Noz",
        "Avelã",
        "Baunilha",
        "Coco",
        "Simples"
    ];

    const cakeFillings = [
        "Ganache",
        "Ganache com sabores",
        "Brigadeiro de Chocolate",
        "Beijinho de coco",
        "Creme de manteiga",
        "Creme de manteiga de merengue suíço",
        "Creme de mascarpone",
        "Creme de mascarpone com sabores",
        "Doce de leite",
        "Molho toffee",
        "Creme pasteleiro",
        "Creme diplomata",
        "Creme chiboust",
        "Creme mousseline",
        "Chantilly cristalizado com gelatina",
        "Lemon Curd",
        "Creme de ovos",
        "Doce de fruta"
    ];

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * max) + min;
    };

    const getRandomCake = () => {
        const cakeType = getRandomNumber(0, cakeTypes.length);
        const cakeFlavour = getRandomNumber(0, cakeFlavours.length);
        const cakeFilling = getRandomNumber(0, cakeFillings.length);
        console.log(cakeType, cakeFlavour, cakeFilling);

        injectCakeInMarkup(
            cakeTypes[cakeType].name,
            cakeFlavours[cakeFlavour],
            cakeFillings[cakeFilling]
        );
    };

    const injectCakeInMarkup = (cakeType, cakeFlavour, cakeFilling) => {
        elements.cakeType.innerText = cakeType;
        elements.cakeFlavour.innerText = cakeFlavour;
        elements.cakeFilling.innerText = cakeFilling;
    };

    getRandomCake();
})();
