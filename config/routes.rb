Rails.application.routes.draw do
  post '/toggle_button', to: 'buttons#toggle'
end