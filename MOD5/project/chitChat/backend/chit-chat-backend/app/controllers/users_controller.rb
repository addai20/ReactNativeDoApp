class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  # may not need a show page for messages/ will probably map through messages
  def show
    @user = User.find(params[:id])
    # byebug
    render json: @user
  end

  def create
    @user = User.create(strong_params)
  end



  private

  def strong_params
    params.require(:user).permit(
      :first_name, :last_name, :native_language, :desired_language
    )
  end
end
