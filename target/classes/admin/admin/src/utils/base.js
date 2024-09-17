const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianwenjuandiaocha/",
            name: "zaixianwenjuandiaocha",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianwenjuandiaocha/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线问卷调查系统"
        } 
    }
}
export default base
