class MessagesController < ApplicationController

  def index
    # index should be based off of the users sent
    # or received messages
    @messages = Message.all
    # @messages = Message.all.select()

    # byebug
    render json: @messages
  end

  def show
    @message = Message.find(params[:id])
    # byebug
    render json: @message
  end

  def create
    @message = Message.create(strong_params)
    render json: @message
  end

  private

  def strong_params
    params.require(:message).permit(
      :sender_id, :receiver_id, :text_body, :seen
    )
  end

end
