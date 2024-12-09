class ApplicationController < ActionController::Base
  before_action :set_locale
  private

  def set_locale
    locale = extract_locale_from_accept_language_header

    I18n.locale = I18n.available_locales.include?(locale.to_sym) ? locale : I18n.default_locale
  end

  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].to_s.scan(/^[a-z]{2}/).first
  end
end
