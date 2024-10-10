export default function Toggle({onChangeHandler}) {

    return (
        <div onChange={onChangeHandler}>
            <label className="btn btn-outline-primary"><input type="radio"
                                                              name="toggle"/><span>Посмотреть</span></label>
            <label className="btn btn-outline-primary"><input type="radio" name="toggle"/><span>Проверить</span></label>
        </div>


    )


}