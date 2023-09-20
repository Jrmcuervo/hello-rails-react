class MessagesController < ApplicationController
    def random
        @message = Message.order(Arel.sql('RANDOM()')).first
        render json: { greeting: @message.greeting }
      end
end
