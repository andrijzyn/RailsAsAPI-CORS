class ButtonsController < ApplicationController
  def toggle
    begin
      button_state = params[:state]
      new_state = button_state == "pressed" ? "unpressed" : "pressed"

      # Текст кнопки передается в ответе
      message = "Button is now #{new_state}"

      render json: {
        state: new_state,
        message: message,
        button_text: I18n.t("button.#{new_state}")
      }
    rescue => e
      Rails.logger.error("Error in ButtonsController#toggle: #{e.message}")
      render json: { error: "An error occurred" }, status: :internal_server_error
    end
  end
end
