class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # ユーザのログイン状態を確認して、ログインしてなければログイン画面に移動
  before_action :authenticate_user!
  # ストロングパラメータ
  before_action :configure_permitted_parameters, if: :devise_controller?

  # クラス内からのみ参照可能
  protected
  # ユーザ名のストロングパラメータ適用
  # 追加のパラメータ(name)を許可したい時
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
