import Mock from  'mockjs';
function mockGet(url){
   return RegExp(url + ".*")
}
Mock.setup({
    timeout: '50-300'
})
Mock.mock(mockGet('/xboot/downloadResources/selectDownloadResourcesPageVoMap'), 'get', function() {
    return Mock.mock({
        code:200,
        message: '@cparagraph(1)',
        success: true,
        sum:null,
        subjoin:null,
        timestamp:'@now',
        result:{
            "user|1-10": [
                {
                    "name|+1": [
                        '@cname'
                    ],
                    "id|+1": [
                        '@id',
                    ],
                    "createTime|+1": [
                        '@date("yyyy-MM-dd")',
                    ],
                    "updateTime|+1": [
                        '@date("yyyy-MM-dd")',
                    ],
                }
            ]
        },

    });
});
Mock.mock(mockGet('/test'), 'get', function() {
    return Mock.mock({
        code:200,
        message: '@cparagraph(1)',
        success: true,
        sum:null,
        subjoin:null,
        timestamp:'@now',
        result:{
            "user|1-10": [
                {
                    "name|+1": [
                     '@cname'
                    ],
                    "id|+1": [
                         '@id',
                    ],
                    "createTime|+1": [
                        '@date("yyyy-MM-dd")',
                    ],
                }
            ]
        },

    });
});
Mock.mock('/testPost', 'post', function() {
    return Mock.mock({
        code:200,
        message: '@cparagraph(1)',
        success: true,
        sum:null,
        subjoin:null,
        timestamp:'@now',
        result:{
            "user|1-10": [
                {
                    "name|+1": [
                        '@cname'
                    ],
                    "id|+1": [
                        '@id',
                    ],
                    "createTime|+1": [
                        '@date("yyyy-MM-dd")',
                    ],
                }
            ]
        },

    });
});
