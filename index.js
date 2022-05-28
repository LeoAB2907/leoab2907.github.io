// import axios from "axios";

const main = $(".projects-main")

$.ajax({
    url: "https://api.github.com/users/LeoAB2907/repos",
    method: "GET"
}).then(async results => {
    // console.log(results)

    for (let i = 0; i < results.length; i++) {
        if (results[i].stargazers_count != 0){
            let name = results[i].name
            let description = results[i].description
            if (description == null){
                description = ""
            }
            let repo_url = results[i].html_url
            let svn_url = results[i].svn_url + "/archive/master.zip"

            // Time Stamp
            let date = new Date(results[i].pushed_at)
            let time = new Intl.DateTimeFormat("en-US", {day: "numeric", month: "long", year: "numeric"}).format(date)

            let article =
                "<article class='projects-article'>" +
                "<h3>" + name + "</h3>" +
                "<p>" + description + "</p>" +
                "<a href='" + svn_url + "' class='projects-btn'><i class='bx bxl-github'></i>Clone Project</a>" +
                "<a href='" + repo_url + "' class='projects-btn'><i class='bx bxl-github'></i>Repo</a>" +
                "<hr>" +
                "<p class='projects-time'>Updated on " + time + "</p>" +
                "</article>"
            main.append(article)
        }
    }
})