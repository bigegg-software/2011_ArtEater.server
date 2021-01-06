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
const CouponInfo = {
    className: 'CouponInfo',
    fields: {
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
            type: 'array',
        },
        state: {
            type: 'number',
        },
        useEndTime: {
            type: 'date',
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
        createBy: {
            type: 'string',
        },
        useEndTime: {
            type: 'date',
        }
    },
    CLP: {
        addField: {},
        find: { '*': true },
        count: { '*': true },
        get: { '*': true },
        create: { 'requiresAuthentication': true },
        update: { 're./≥;/quiresAuthentication': true },
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


SchemaConfig.config([Subjects,TestQuestions,Order,ActionConfig,
    ErrorHistory,ExamPaper,Message,MessageReadHistory,QuestionHistory,
    SignInHistory,_User,Opinions,TestHistory,RightHistory,CouponRecord,
    CouponInfo,ExamRecord,ScoreRecord,WechatPay,SubjectProgress
])