const SchemaConfig = require('@bigegg/parse-server-schema-config')
const _User = {
    className: '_User',
    fields: {
        openid: {
            type: 'string',
        },
        avatarUrl: {
            type: 'string',
        },
        nickName: {
            type: 'string',
        },
        cityId: {
            type: 'string',
        },
        cityName: {
            type: 'string',
        },
        proviceId: {
            type: 'string',
        },
        proviceName: {
            type: 'string',
        },
        speciality: {
            type: 'string',
        },
        university: {
            type: 'array',
        },
        phone: {
            type: 'string',
        },
        realname: {
            type: 'string',
        },
        role: {
            type: 'string',
        },
        amount: {
            type: 'number',
        },
        score: {
            type: 'number',
        },
        score_all: {
            type: 'number',
        },
        label: {
            type: 'string',
        },
        memberType: {
            type: 'number',
        },
        parentOpenId: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { '*': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Subjects = {
    className: 'Subjects',
    fields: {
        headImg: {
            type: 'string',
        },
        subject_name: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        price: {
            type: 'number',
        },
        level: {
            type: 'number',
        },
        parent_ID: {
            type: 'string',
        },
        has_down_level: {
            type: 'boolean',
        },
        backgroundImg: {
            type: 'string',
        },
        minScore: {
            type: 'number',
        },
        maxScoreMoney: {
            type: 'number',
        },
        comments: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const TestQuestions = {
    className: 'TestQuestions',
    fields: {
        accuracy: {
            type: 'number',
        },
        subjects: {
            type: 'array',
        },
        index: {
            type: 'number',
        },
        title: {
            type: 'string',
        },
        type: {
            type: 'number',
        },
        images: {
            type: 'array',
        },
        options: {
            type: 'array',
        },
        isImportant: {
            type: 'number',
        },
        comments: {
            type: 'string',
        },
        updatedBy: {
            type: 'string'
        },
        //标签
        tag: {
            type: 'pointer',
            targetClass: 'LabelManagement'
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Order = {
    className: 'Order',
    fields: {
        couponAmount: {
            type: 'number',
        },
        scoreAmount: {
            type: 'number',
        },
        couponId: {
            type: 'string',
        },
        orderNo: {
            type: 'string',
        },
        subjectId: {
            type: 'string',
        },
        subjectName: {
            type: 'string',
        },
        price: {
            type: 'number',
        },
        cash: {
            type: 'number',
        },
        openId: {
            type: 'string',
        },
        state: {
            type: 'number',
        },
        wechatPayOrderId: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const ActionConfig = {
    className: 'ActionConfig',
    fields: {
        page: {
            type: 'string',
        },
        code: {
            type: 'string',
        },
        action: {
            type: 'string',
        },
        isNeedPay: {
            type: 'number',
        },
        price: {
            type: 'number',
        },
        updatedBy: {
            type: 'string',
        },
        minScore: {
            type: 'number',
        },
        maxScoreMoney: {
            type: 'number',
        },
        comments: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const ErrorHistory = {
    className: 'ErrorHistory',
    fields: {
        questionId: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        options: {
            type: 'array',
        },
        openid: {
            type: 'string',
        },
        count: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const ExamPaper = {
    className: 'ExamPaper',
    fields: {
        test_paper_name: {
            type: 'string',
        },
        subjects: {
            type: 'array',
        },
        options: {
            type: 'array',
        },
        questions: {
            type: 'array',
        },
        time_count: {
            type: 'number',
        },
        score: {
            type: 'number',
        },
        pass_score: {
            type: 'number',
        },
        rang: {
            type: 'string',
        },
        way: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const Message = {
    className: 'Message',
    fields: {
        title: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        surface: {
            type: 'array',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const MessageReadHistory = {
    className: 'MessageReadHistory',
    fields: {
        openid: {
            type: 'string',
        },
        MessageIds: {
            type: 'array',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const QuestionHistory = {
    className: 'QuestionHistory',
    fields: {
        openid: {
            type: 'string',
        },
        subjectId: {
            type: 'string',
        },
        questIndex: {
            type: 'number',
        },
        subjectIndex: {
            type: 'number',
        },
        isImportant: {
            type: 'number',
        },
        count: {
            type: 'number',
        },
        answers:{
            type: 'array',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const SignInHistory = {
    className: 'SignInHistory',
    fields: {
        openid: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Opinions = {
    className: 'Opinions',
    fields: {
        openid: {
            type: 'string',
        },
        isAnonymous: {
            type: 'number',
        },
        nickName: {
            type: 'string',
        },
        phone: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        message: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const TestHistory = {
    className: 'TestHistory',
    fields: {
        openid: {
            type: 'string',
        },
        examName: {
            type: 'string',
        },
        examId: {
            type: 'string',
        },
        seconds: {
            type: 'number',
        },
        allscore: {
            type: 'number',
        },
        score: {
            type: 'number',
        },
        pass_score: {
            type: 'number',
        },
        questions: {
            type: 'array',
        },
        answers: {
            type: 'array',
        },
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const RightHistory = {
    className: 'RightHistory',
    fields: {
        openid: {
            type: 'string',
        },
        questions: {
            type: 'array',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const CouponRecord = {
    className: 'CouponRecord',
    fields: {
        openid: {
            type: 'string', 
        },
        couponName: {
            type: 'string',
        },
        amount: {
            type: 'number',
        },
        useTime: {
            type: 'date',
        },
        orderNo: {
            type: 'string',
        },
        state: {
            type: 'number',
        },
        useEndTime: {
            type: 'date',
        },
        tipName: {
            type: 'string',
        },
        tipContent: {
            type: 'string',
        },
        mode: {
            type: 'string',
        },
        productType: {
            type: 'string',
        },
        couponId: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const CouponInfo = {
    className: 'CouponInfo',
    fields: {
        couponName: {
            type: 'string',
        },
        amount: {
            type: 'number',
        },
        createBy: {
            type: 'string',
        },
        useEndTime: {
            type: 'date',
        },
        tipName: {
            type: 'string',
        },
        tipContent: {
            type: 'string',
        },
        productType: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const ExamRecord = {
    className: 'ExamRecord',
    fields: {
        openid: {
            type: 'string',
        },
        questionId: {
            type: 'string',
        },
        subjectId: {
            type: 'string',
        },
        result: {
            type: 'boolean',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const ScoreRecord = {
    className: 'ScoreRecord',
    fields: {
        openid: {
            type: 'string',
        },
        channel: {
            type: 'string',
        },
        extend: {
            type: 'string',
        },
        score: {
            type: 'number',
        },
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const WechatPay = {
    className: 'WechatPay',
    fields: {
        prepayId: {
            type: 'string',
        },
        ip: {
            type: 'string',
        },
        user: {
            type: 'pointer',
            targetClass: '_User'
        },
        productDescription: {
            type: 'string',
        },
        status: {
            type: 'string',
        },
        amount: {
            type: 'number',
        },
        tradeType: {
            type: 'string',
        },
        tradeId: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const SubjectProgress = {
    className: 'SubjectProgress',
    fields: {
        openid: {
            type: 'string',
        },
        isImportant: {
            type: 'number',
        },
        subjectId: {
            type: 'string',
        },
        subjectIndex: {
            type: 'number',
        },
        quesCount: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

const Sharebg = {
    className: 'Sharebg',
    fields: {
        area: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
        img: {
            type: 'string',
        },
        updatedBy: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const OldExams = {
    className: 'OldExams',
    fields: {
        name: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        updatedBy: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const QuestReport = {
    className: 'QuestReport',
    fields: {
        questionId: {
            type: 'string',
        },
        date: {
            type: 'string',
        },
        accuracy: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Banner = {
    className: 'Banner',
    fields: {
        title: {
            type: 'string',
        },
        img: {
            type: 'string',
        },
        src: {
            type: 'string',
        },
        sort: {
            type: 'string',
        },
        state: {
            type: 'number',
        },
        remark: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Recommend = {
    className: 'Recommend',
    fields: {
        title: {
            type: 'string',
        },
        //副标题
        subtitle: {
            type: 'string',
        },
        headImg: {
            type: 'string',
        },
        courseId: {
            type: 'string',
        },
        videoId: {
            type: 'string',
        },
        videoName: {
            type: 'string',
        },
        href: {
            type: 'string',
        },
        updatedBy: {
            type: 'string',
        },
        remark: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Courses = {
    className: 'Courses',
    fields: {
        courseName: {
            type: 'string',
        },
        price: {
            type: 'number',
        },
        level: {
            type: 'number',
        },
        parent_ID: {
            type: 'string',
        },
        has_down_level: {
            type: 'boolean',
        },
        comments: {
            type: 'string',
        },
        maxScoreMoney: {
            type: 'number',
        },
        minScore: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Video = {
    className: 'Video',
    fields: {
        courseIds: {
            type: 'array',
        },
        title: {
            type: 'string',
        },
        videoSrc: {
            type: 'string',
        },
        coverUrl: {
            type: 'string',
        },
        href: {
            type: 'string',
        },
        updatedBy: {
            type: 'string',
        },
        remark: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
const Activity = {
    className: 'Activity',
    fields: {
        products: {
            type: 'array',
        },
        title: {
            type: 'string',
        },
        price: {
            type: 'number',
        },
        maxScoreMoney: {
            type: 'number',
        },
        minScore: {
            type: 'number',
        },
        updatedBy: {
            type: 'string',
        },
        comments: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//标签管理
const LabelManagement = {
    className: 'LabelManagement',
    fields: {
        //标签名称
        tagName: {
            type: 'string',
        },
        //注释
        note: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//会员类型 
const MemberType = {
    className: 'MemberType',
    fields: {
        //会员名称
        memberName: {
            type: 'string',
        },
        //会员原价
        memberPrice: {
            type: 'string',
        },
        //截止日期
        expirationDate: {
            type: 'string',
        },
        //会员有效期
        memberPeriod: {
            type: 'string',
        },
        //购买说明
        explain: {
            type: 'string',
        },
        //会员优惠价格
        promotionPrice: {
            type: 'number',
        },
        //封面图
        surface: {
            type: 'string',
        },
        //封面图ID
        surfaceId: {
            type: 'number',
        },
        //会员类型名称
        typeName: {
            type: 'string',
        },
        
        limitNumber: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//首页模块
const Module = {
    className: 'Module',
    fields: {
        //模块名称
        name: {
            type: 'string',
        },
        //展示数量
        showAmount: {
            type: 'number',
        },
        //展示顺序
        order: {
            type: 'number',
        },
        //更新人
        updatedBy: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//课程管理 3.0新课程，和2.0没关联  新表
const CoursesModule = {
    className: 'CoursesModule',
    fields: {
        //课程名称
        subjectName: {
            type: 'string',
        },
        //副标题1
        subTitle1: {
            type: 'string',
        },
        //副标题2
        subTitle2: {
            type: 'string',
        },
        //是否是VIP课程
        vip: {
            type: 'boolean',
        },
        //是否隐藏课程
        hide: {
            type: 'boolean',
        },
        //上架
        putaway: {
            type: 'boolean',
        },
        //种类
        kind: {
            type: 'number',
        },
        //标签
        tag: {
            type: 'pointer',
            targetClass: 'LabelManagement'
        },
        //顺序
        order: {
            type: 'number',
        },
        //flag
        flag: {
            type: 'number',
        },
        //负责讲师头像
        portrait: {
            type: 'array',
        },
        //负责讲师姓名
        lecturerName: {
            type: 'string',
        },
        //课程链接
        link: {
            type: 'string',
        },
        //课程说明
        explain: {
            type: 'string',
        },
        //课程链接时长
        duration: {
            type: 'string',
        },
        //课程头图
        headImg: {
            type: 'array',
        },
        //课程介绍
        introduce : {
            type: 'string',
        },
        // 等级
        level: {
            type: 'number',
        },
        //父级是否是有子级  
        has_down_level: {
            type: 'boolean',
        },
        // 父级Id
        parent_ID: {
            type: 'string',
        },
        //根节点Id 
        rootId: {
            type: 'string',
        },
        //推荐课程
        recommendCourse:{
            type: 'array',
        },
        //课程排序
        innerOrder:{
            type: 'number',
        },
        //课程列表头图
        listImg:{
            type: 'array',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//模块关联课程
const ModuleAssociatedCourses = {
    className: 'ModuleAssociatedCourses',
    fields: {
        //封面图
        surface: {
            type: 'array',
        },
        //标题
        title: {
            type: 'string',
        },
        //副标题
        subTitle: {
            type: 'string',
        },
        //展示顺序
        order: {
            type: 'number',
        },
        //N值
        N: {
            type: 'number',
        },
        //基数
        baseNum: {
            type: 'number',
        },
        //模块
        module: {
            type: 'pointer',
            targetClass: 'Module'
        },
        //课程
        baseNum: {
            type: 'number',
        },
        //课程试听 1 首页模块为 undefined
        courseListening: {
            type: 'number',
        },
        updatedBy  : {
            type: 'string',
        },
         //课程
         course : {
            type: 'pointer',
            targetClass: 'CoursesModule'
        },
        //真实值
        realNum : {
            type: 'number',
       },
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

//课程收藏
const Collections = {
    className: 'Collections',
    fields: {
        //用户标识
        openId: {
            type: 'string',
        },
        //收藏的课程objectId
        ids: {
            type: 'array',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//课程正在学习/上次学习
const Learning = {
    className: 'Learning',
    fields: {
        //用户标识
        openId: {
            type: 'string',
        },
        //正在学习的课程objectId
        ids: {
            type: 'array',
        },
        //上次学习的课程objectId
        preIds: {
            type: 'object',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//课程正在学习/上次学习
const MemberList = {
    className: 'MemberList',
    fields: {
        //用户标识
        openId: {
            type: 'string',
        },
        //订单编号
        orderArr: {
            type: 'array',
        },
        //会员类型
        memberType: {
            type: 'string',
        },
        //到期时间
        endTime: {
            type: 'number',
        },
        //手机号
        phone  : {
            type: 'string',
        },
        //昵称
        nickName : {
            type: 'string',
        },
        //真实姓名
        realName: {
            type: 'string',
        },
        status: {
            type: 'number',
        },
        //是否是黑金升级
        Upgrade: {
            type: 'boolean',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//默认封面
const DefaultCover = {
    className: 'DefaultCover',
    fields: {
        //封面链接
        surface: {
            type: 'array',
        },
        //是否使用
        isUse: {
            type: 'boolean',
        },
        //更新人
        updatedBy: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//公告栏
const BulletinBoard = {
    className: 'BulletinBoard',
    fields: {
        title: {
            type: 'string',
        },
        //公告名称
        bulletinName: {
            type: 'string',
        },
        //公告类型
        type: {
            type: 'number',
        },
        //是否展示
        isShow: {
            type: 'boolean',
        },
        //活动信息-H5链接
        link: {
            type: 'string',
        },
         //公告信息
        informationBulletin: {
            type: 'string',
        },
        //更新人
        updatedBy: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

//活动管理
const ActiveManagement = {
    className: 'ActiveManagement',
    fields: {
        //活动底图
        baseMap: {
            type: 'string',
        },
        //活动标题
        title: {
            type: 'string',
        },
        //黑金活动价格
        blackActivePrice: {
            type: 'number',
        },
        //铂金活动价格
        platinumActivePrice: {
            type: 'number',
        },
         //白银活动价格
         silverActivePrice: {
            type: 'number',
        },
        //活动链接
        link: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//新优惠卷
const NewCouponInfo = {
    className: 'NewCouponInfo',
    fields: {
        //优惠卷金额
        amount: {
            type: 'number',
        },
        //优惠卷名称
        couponName: {
            type: 'string',
        },
        //优惠卷使用范围
        couponRange: {
            type: 'string',
        },
        //优惠卷类型
        couponType: {
            type: 'string',
        },
         //添加人
         createBy: {
            type: 'string',
        },
        //使用截止时间
        useEndTime: {
            type: 'date',
        },
        //有效期
        termValidity: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//新手动发送优惠卷记录
const NewCouponRecord = {
    className: 'NewCouponRecord',
    fields: {
        //优惠卷金额
        amount: {
            type: 'number',
        },
        //优惠卷名称
        couponName: {
            type: 'string',
        },
        //优惠卷使用范围
        couponRange: {
            type: 'string',
        },
        //优惠卷类型
        couponType: {
            type: 'string',
        },
        //优惠卷objectId
        couponId: {
            type: 'string',
        },
         //使用截止时间
         useEndTime: {
            type: 'date',
        },
        //发送优惠卷(部分学生发送或全部学生发送)
        mode: {
            type: 'string',
        },
        //用户openid
        openid: {
            type: 'string',
        },
        //使用时间
        useTime: {
            type: 'date',
        },
        //用户有没有使用优惠劵
        state: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//渠道管理 
const ChannelManagement = {
    className: 'ChannelManagement',
    fields: {
        //活动底图
        baseMap: {
            type: 'string',
        },
        //渠道名称
        channelName: {
            type: 'string',
        },
        //黑金活动价格
        blackActivePrice: {
            type: 'number',
        },
        //铂金活动价格
        platinumActivePrice: {
            type: 'number',
        },
         //白银活动价格
         silverActivePrice: {
            type: 'number',
        },
        //分成比例
        divideInto: {
            type: 'string',
        },
        //提成总金额
        TotalAmountCommission: {
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//拉新列表 
const PullNew = {
    className: 'PullNew',
    fields: {
        //会员昵称
        nickName: {
            type: 'string',
        },
        //会员类型
        memberType: {
            type: 'number',
        },
        //是否已处理
        isDispose: {
            type: 'boolean',
        },
        //手机号
        phone: {
            type: 'string',
        },
         //拉新人数
         buyUser: {
            type: 'array',
        },
        //升级黑金拉新
        upgradeBuyArr: {
            type: 'array',
        },
        //姓名
        name: {
            type: 'string',
        },
        //总共购买次数
        buyNum:{
            type: 'number',
        },
        //升级黑金总共购买次数
        upgradeBuyNum:{
            type: 'number',
        },
        //recruits
        recruits:{
            type: 'array',
        },
        openid: {
            type: 'string',
        },
        //黑金拉新人数
        blackPullUser: {
            type: 'number',
        },
        //黑金拉新人数数组
        blackPullUserArr:{
            type: 'array',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//优惠券消息发送列表
const CouponMessage = {
    className: 'CouponMessage',
    fields: {
        
        openid: {
            type: 'string',
        },
        //意见反馈内容
        content: {
            type: 'string',
        },
        //回复消息内容
        message: {
            type: 'string',
        },
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//渠道提成列表
const RoyaltyBill = {
    className: 'RoyaltyBill',
    fields: {
        //会员类型
        memberType: {
            type: 'string',
        },
        //父级id
        parentId: {
            type: 'string',
        },
        //价格
        price: {
            type: 'number',
        },
        //提成
        commissionPrice: {
            type: 'number',
        },
        openid: {
            type: 'string',
        },
        //手机号
        phone: {
            type: 'string',
        },
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//每日新知-课程
const DailyCourse = {
    className: 'DailyCourse',
    fields: {
        //封面图
        surface: {
            type: 'array',
        },
        //标题
        title: {
            type: 'string',
        },
        //副标题
        subTitle: {
            type: 'string',
        },
        //N值
        N: {
            type: 'number',
        },
        //基数
        baseNum: {
            type: 'number',
        },
        //课程
        course: {
            type: 'pointer',
            targetClass: 'CoursesModule'
        },
        //更新人
        updatedBy: {
            type: 'string',
        },
        //真实点击量
        realNum:{
            type: 'number',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}
//每日新知-教师头像
const DailyTeacher = {
    className: 'DailyTeacher',
    fields: {
        //头像
        portrait: {
            type: 'array',
        },
        //教师名称
        name: {
            type: 'string',
        },
        //更新人
        updatedBy: {
            type: 'string',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 'requiresAuthentication': true },
        delete: { 'requiresAuthentication': true },
    },
}

//渠道提成列表
SchemaConfig.config([Subjects,TestQuestions,Order,ActionConfig,
    ErrorHistory,ExamPaper,Message,MessageReadHistory,QuestionHistory,
    SignInHistory,_User,Opinions,TestHistory,RightHistory,CouponRecord,
    CouponInfo,ExamRecord,ScoreRecord,WechatPay,SubjectProgress,
    Sharebg,OldExams,QuestReport,Banner,Recommend,Courses,Video,Activity,

    LabelManagement,MemberType,Module,CoursesModule,ModuleAssociatedCourses,Collections,
    Learning,MemberList,DefaultCover,

    BulletinBoard,ActiveManagement,NewCouponInfo,NewCouponRecord,ChannelManagement,
    PullNew,CouponMessage,RoyaltyBill,DailyCourse,DailyTeacher

])