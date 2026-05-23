# Ruby 3.2+ removed tainted?/taint - patch back for liquid 4.0.3 compatibility
class Object
  def tainted?
    false
  end

  def taint
    self
  end
end
