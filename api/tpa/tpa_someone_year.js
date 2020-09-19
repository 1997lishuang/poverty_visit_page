import request from '@/utils/request'



export default {
        //current当前页 limit每页记录数 teacherQuery条件对象
    get_tpa_tist_page(current,limit) {
        return request({
            //url: '/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url: `http://machaoyin.top:8080/jzfp/poverty/findPage?current=${current}&limit=${limit}`,
            method: 'get',
            withCredentials: true,
            //teacherQuery条件对象，后端使用RequestBody获取数据
            //data表示把对象转换json进行传递到接口里面
            // data: data6
          })
    },
    get_tpa_one_year(year) {
        return request({
             url: `/eduservice/teacher/getTeacher/${year}`,
             method: 'get'
          })
    },
        //根据id查询讲师
    get_tpa_two_year(year) {
        return request({
            url: `/eduservice/teacher/getTeacher/${year}`,
            method: 'get'
          })
    },
    get_tpa_three_year(year) {
        return request({
            url: `/eduservice/teacher/getTeacher/${year}`,
            method: 'get'
          })
    },
    get_tpa_person(username,limit,current){
        return request({
                    url: `http://machaoyin.top:8080/jzfp/poverty/findPage?name=${username}&limit=${limit}&current=${current}`,
                    method: 'get'
                  })

    }

}
