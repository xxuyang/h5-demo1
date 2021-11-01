import { Message } from "element-ui";

export const ok = message => {
    Message({
        message: message != null ? message : '操作成功！',
        type: 'success',
        showClose: true,
        center: true,
        duration: 5000
    })
}
export const warn = message => {
    Message({
        message: message != null ? message : '操作失败！',
        type: 'warning',
        showClose: true,
        center: true,
        duration: 5000
    })
}

export const error = message => {
    Message({
        message: message != null ? message : '操作失败！',
        type: 'error',
        showClose: true,
        center: true,
        duration: 5000
    })
}