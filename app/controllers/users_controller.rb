class UsersController < ApplicationController
  # editアクション(viewで表示)
  def edit
  end

  # データの編集が行われる
  def update
    # ストロングパラメータが通ったら
    if current_user.update(user_params)
      # rootにリダイレクト
      flash[:notice]="ユーザ情報を更新しました"
      redirect_to root_path
    else
      # 通らなかったらeditに戻る
      render :edit
    end
  end

  def index
    @users = User.where('name LIKE(?)', "%#{params[:keyword]}%")
    respond_to do |format|
      format.html
      format.json
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
